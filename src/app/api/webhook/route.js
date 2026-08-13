import { NextResponse } from 'next/server'


import { stripe } from '@/app/lib/stripe'
import { postBooking } from '@/app/lib/postBooking'

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const { serviceId, serviceName, price, date } = session.metadata

    await postBooking({
      serviceId,
      serviceName,
      price: Number(price),
      date,
      customerEmail: session.customer_details?.email,
      sessionId: session.id,
     
    })
  }

  return NextResponse.json({ received: true })
}