"use server"
import clientPromise from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"

 




export const sendMessage=async({name,email,subject,message})=>{
      const client=await clientPromise 
      const db=client.db("care")
       const result=await db.collection("messages").insertOne({
               name,
               email,
               subject,
               message,
               createAt:new Date(),
               status:"unread"
       }) 
       return {success:true,insertedId:result.insertedId.toString()}
} 

export const getAllMessages=async()=>{ 

       const client = await clientPromise
  const db = client.db("care")
  const messages=await db.collection("messages").find().sort({createAt:-1}).toArray() 
  return messages.map((m)=>({
       ...m,
       _id:m._id.toString(),
  }))
} 

export const markMessageRead = async (id) => {
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("messages").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status: "read" } }
  )
  return { success: true }
}

export const replyToMessage = async (id, toEmail, subject, replyText) => {
  const client = await clientPromise
  const db = client.db("care")

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: `Re: ${subject}`,
    text: replyText,
  })

  await db.collection("messages").updateOne(
    { _id: new ObjectId(id) },
    { $set: { status: "replied" } }
  )

  return { success: true }
}