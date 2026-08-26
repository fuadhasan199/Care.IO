"use server"
import clientPromise from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"

 



export const getAllUsers=async()=>{
     const client=await clientPromise
     const db=client.db("care") 
     const users=await db.collection("users").find().sort({createdAt:-1}).toArray()
     return users.map(user=>({
         _id: u._id.toString(),
    name: u.name,
    email: u.email,
    role: u.role,
    status: u.status,
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