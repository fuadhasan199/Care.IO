import clientPromise from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"


export async function GET(request,{params}){

   try{
      
     const {id}=await params 
      const client=await clientPromise 
      const db=client.db('care') 
      const collection= db.collection("services")
      const service=await collection.findOne({_id:new ObjectId(id)})
      
     
   if (!service) {
      return new Response(
        JSON.stringify({ message: "Service not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(service), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

   } 
   catch(err){
      console.log(err)
       return new Response(JSON.stringify({message:"Internal server error"}),{status:500})
   }


}