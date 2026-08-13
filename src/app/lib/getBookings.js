"use server"

import clientPromise from "./dbConnect"



export const getBookingsByEmail = async (email) => {
  if (!email) return []

  const client = await clientPromise
  const db = client.db("care")
  const bookingCollection = db.collection("bookings")

  const bookings = await bookingCollection
    .find({ customerEmail: email })
    .sort({ createAt: -1 })
    .toArray()

  return bookings.map((b) => ({
    ...b,
    _id: b._id.toString(),
  }))
}