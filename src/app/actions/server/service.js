"use server"
import { ObjectId } from "mongodb"
import clientPromise from "@/app/lib/dbConnect"

export const getAllServices = async (search = "") => {
  const client = await clientPromise
  const db = client.db("care")
  
  // Build dynamic search query
  const query = search
    ? {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      }
    : {}

  const services = await db.collection("services").find(query).toArray()
  return services.map(s => ({ ...s, _id: s._id.toString() }))
}

export const addService = async (payload) => {
  const client = await clientPromise
  const db = client.db("care")

  const newService = {
    id: payload.id,
    title: payload.title,
    category: payload.category,
    image: payload.image,
    shortDescription: payload.shortDescription,
    description: payload.description,
    pricePerDay: Number(payload.pricePerDay) || 0,
    rating: Number(payload.rating) || 0,
    features: payload.features ? payload.features.split(",").map(f => f.trim()).filter(Boolean) : [],
    coveredServices: payload.coveredServices ? payload.coveredServices.split(",").map(c => c.trim()).filter(Boolean) : [],
    createdAt: new Date(),
  }

  const result = await db.collection("services").insertOne(newService)
  return { success: true, insertedId: result.insertedId.toString() }
}

export const updateService = async (serviceId, payload) => {
  const client = await clientPromise
  const db = client.db("care")

  const updatedService = {
    id: payload.id,
    title: payload.title,
    category: payload.category,
    image: payload.image,
    shortDescription: payload.shortDescription,
    description: payload.description,
    pricePerDay: Number(payload.pricePerDay) || 0,
    rating: Number(payload.rating) || 0,
    features: payload.features ? payload.features.split(",").map(f => f.trim()).filter(Boolean) : [],
    coveredServices: payload.coveredServices ? payload.coveredServices.split(",").map(c => c.trim()).filter(Boolean) : [],
  }

  await db.collection("services").updateOne(
    { _id: new ObjectId(serviceId) },
    { $set: updatedService }
  )
  return { success: true }
}

export const deleteService = async (serviceId) => {
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("services").deleteOne({ _id: new ObjectId(serviceId) })
  return { success: true }
}