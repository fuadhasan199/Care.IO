"use server"
import { ObjectId } from "mongodb"
import clientPromise from "./dbConnect"

export const updateImage=async(formData)=>{
      const file=formData.get("image")
      if(!file) return{success:false,message:"No file selected" } 
       const imgbbForm=new FormData() 
       imgbbForm.append("image",file) 
       
       const res=await fetch(`https://api.imgbb.com/1/upload?key=${process.env.imgbb_api_key}`,{
         method:"POST",
         body:imgbbForm
       }) 
       const data=await res.json() 
       
       if (!data.success) {
    return { success: false, message: "Upload failed" }
  } 
   return { success: true, url: data.data.display_url } 
}  

export const updateUserImage = async (userId, imageUrl) => {
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("users").updateOne(
    { _id: new ObjectId(userId) },
    { $set: { image: imageUrl } }
  )
  return { success: true }
}

export const updateUserName = async (userId,name) => {
  const client = await clientPromise
  const db = client.db("care")
  await db.collection("users").updateOne(
      { _id: new ObjectId(userId) },
      { $set: { name } }
  )
  return { success: true } 
}