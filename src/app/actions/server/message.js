"use server"
import clientPromise from "@/app/lib/dbConnect"

 




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

