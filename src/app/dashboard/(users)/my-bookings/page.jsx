import { getServerSession } from 'next-auth'

import { getBookingsByEmail } from '@/app/lib/getBookings'
import { authOptions } from '@/app/lib/authOption'

const MyBookings = async () => {
  const session = await getServerSession(authOptions)
  const userEmail = session?.user?.email

  if (!userEmail) {
    return (
      <div className="max-w-2xl mx-auto my-20 text-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 border border-slate-100">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1F4D42]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#1F4D42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-[#1F4D42] mb-2">Please Login</h2>
          <p className="text-slate-500 text-sm">You need to be logged in to view your bookings.</p>
        </div>
      </div>
    )
  }

  const bookings = await getBookingsByEmail(userEmail)

  return (
    <div className="max-w-6xl mx-auto my-10 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1F4D42] tracking-tight">
            My Bookings
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Logged in as <span className="font-medium text-[#1F4D42]">{userEmail}</span>
          </p>
        </div>
        <span className="px-4 py-2 rounded-full bg-[#1F4D42]/10 text-[#1F4D42] text-sm font-semibold">
          {bookings.length} {bookings.length === 1 ? 'Booking' : 'Bookings'}
        </span>
      </div>

      {/* Empty state */}
      {bookings.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-14 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E8846B]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#E8846B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#1F4D42] mb-1">No bookings yet</h3>
          <p className="text-slate-500 text-sm">Once you book a service, it will show up here.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#1F4D42]/5 border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1F4D42]/70">Service</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1F4D42]/70">Price</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1F4D42]/70">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1F4D42]/70">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-[#1F4D42] text-sm">
                      {booking.serviceName}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                      ৳{booking.price}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(booking.date).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {booking.status === 'paid' ? 'Confirmed' : booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-slate-100">
            {bookings.map((booking) => (
              <div key={booking._id} className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {booking.status === 'paid' ? 'Confirmed' : booking.status}
                  </span>
                  <span className="text-xs text-slate-400">
                    {new Date(booking.date).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="font-bold text-[#1F4D42] mb-1">{booking.serviceName}</h3>
                <p className="text-sm text-slate-500">
                  ৳{booking.price} <span className="text-xs">/day</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyBookings