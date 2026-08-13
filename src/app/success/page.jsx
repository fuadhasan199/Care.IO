import { redirect } from 'next/navigation'
import { stripe } from '../lib/stripe'


export default async function Success({ searchParams }) {
  const { session_id } = await searchParams
  if (!session_id) {
    throw new Error('Please provide a valid session_id')
  }

  const {
    status,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  })

  if (status === 'open') {
    return redirect('/')
  }  
   
  if (status === 'complete') {
    return (
      <section className="max-w-xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-[#1F4D42] mb-4">Booking Confirmed!</h1>
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          <strong>{customerEmail}</strong>.
        </p>
      </section>
    )
  }
}