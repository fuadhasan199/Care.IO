import clientPromise from "@/app/lib/dbConnect"



export async function GET(request) {
     
 try{  
      const {searchParams}=new URL(request.url) 
       const search =await searchParams.get("search")
       
       const client=await clientPromise 
       const db=client.db("care")
      const  collection=await db.collection("services")  

    let query={}
     
    if(search){
         query={title:{$regex:search,$options:"i"}}
    }


      const data=await collection.find(query).toArray() 
      return new Response(JSON.stringify(data),{status:200})
 } 
 catch(err){ 
    console.log(err)
       return new Response(JSON.stringify({message:"Internal server error"}),{status:500})
 }

}