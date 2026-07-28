"use server"
import clientPromise from "@/app/lib/dbConnect"
import bcrypt from "bcrypt"; 
 

export const postUser=async(payload)=>{
      
const {name,email,password,nid,contact}=payload 
const client=await clientPromise 
const db=client.db("care")
const userCollection=db.collection("users")

const existingUser=await userCollection.findOne({email}) 

if(existingUser){
     return {success:false,message:"User already existing"} 
} 

const hashPassword=await bcrypt.hash(password,10)
const newUser={
      name,
      email,
      password:hashPassword,
      nid,
      contact,
      role:"user",
      status:"active",
      createAt:new Date()
} 
const result=await userCollection.insertOne(newUser)
return {success: true, insertedId: result.insertedId.toString()}


}