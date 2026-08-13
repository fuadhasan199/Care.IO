import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/app/lib/stripe'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/authOption'

export async function POST(req) {
  try { 
    const session = await getServerSession(authOptions) 

     if (!session?.user?.email) {
      return NextResponse.json({ error: 'Please login first' }, { status: 401 })
    }
    const body = await req.json()
    const { serviceId, serviceName, price } = body

    const headersList = await headers()
    const origin = headersList.get('origin')

    const checkoutSession= await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'bdt',
            product_data: { name: serviceName },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: session.user.email,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/services/${serviceId}?canceled=true`,
      metadata: {
        serviceId,
        serviceName,
        price: price.toString(),
        date: new Date().toISOString(),
        customerEmail: session.user.email,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}