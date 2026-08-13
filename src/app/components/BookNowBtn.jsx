'use client'

import { useState } from 'react'

export default function BookNowButton({ service }) {
  const [loading, setLoading] = useState(false)

  const handleBookNow = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId:service._id,
          serviceName: service.title,
          price: service.pricePerDay, 
        }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error(data.error)
      }
    } catch (err) {
       console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 pt-4 flex justify-end">
      <button
        onClick={handleBookNow}
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1F4D42] hover:bg-[#163931] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#1F4D42]/20 hover:shadow-none transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? 'Redirecting...' : 'Book Now'}
      </button>
    </div>
  )
}