import clientPromise from "@/app/lib/dbConnect"



export async function GET() {
     
 try{
       const client=await clientPromise 
       const db=client.db("care")
      const  collection=await db.collection("services") 
      const data=await collection.find().toArray() 
      return new Response(JSON.stringify(data),{status:200})
 } 
 catch(err){ 
    console.log(err)
       return new Response(JSON.stringify({message:"Internal server error"}),{status:500})
 }

}