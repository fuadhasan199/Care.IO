import { MongoClient } from 'mongodb';


let clientPromise=global._mongoClientPromise 

if (!clientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI);
    clientPromise =client.connect() 

  global._mongoClientPromise = clientPromise

}
 export default clientPromise










// const client =  
// await client.connect() 

// export default client


