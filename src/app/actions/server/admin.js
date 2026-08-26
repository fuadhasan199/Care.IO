"use server"
import clientPromise from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"

 



export const getAllUsers=async()=>{
     const client=await clientPromise
     const db=client.db("care") 
     const users=await db.collection("users").find().sort({createdAt:-1}).toArray()
     return users.map(user=>({
         _id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
     }))
} 
export const makeAdmin = async (userId) => {
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    { $set: { role: "admin" } }
  )
  return { success: true }
} 
export const toggleUserStatus = async (userId, currentStatus) => {
  const newStatus = currentStatus === "active" ? "blocked" : "active"
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    { $set: { status: newStatus } }
  )
  return { success: true, status: newStatus }
}