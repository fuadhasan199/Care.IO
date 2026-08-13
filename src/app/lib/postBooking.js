"use server"

import clientPromise from "./dbConnect"



export const postBooking = async (payload) => {
  const { serviceId, serviceName, price, date, customerEmail, sessionId } = payload

  const client = await clientPromise
  const db = client.db("care")
  const bookingCollection = db.collection("bookings")

  // duplicate save protect 
  const existingBooking = await bookingCollection.findOne({ sessionId })
  if (existingBooking) {
    return { success: false, message: "Booking already exists" }
  }

  const newBooking = {
    serviceId,
    serviceName,
    price,
    date,
    customerEmail,
    sessionId,
    status: "paid",
    createAt: new Date(),
  } 

  const result = await bookingCollection.insertOne(newBooking)
  return { success: true, insertedId: result.insertedId.toString() }
}