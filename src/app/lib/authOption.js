import Credentials from "next-auth/providers/credentials"
import clientPromise from "./dbConnect"
import bcrypt from "bcrypt"; 
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [ 


     Credentials({
    
    name: 'Credentials',
    
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) { 
      const client=await clientPromise 
      const db=client.db("care")
      const user=await db.collection("users").findOne({email:credentials.email})

      if(!user){
          return null 
      } 

       const isvalid=await bcrypt.compare(credentials.password,user.password) 
       if(!isvalid){
        return null
       } 
        return {
           id:user._id,
           name:user.name,
           email:user.email,
           role:user.role
        }
  
      
    }
  }) 
  , 
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    
    
  ], 
  session: {
    strategy: "jwt",
  }, 
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const client = await clientPromise;
        const db = client.db("care");
        const exitingUser = await db.collection("users").findOne({ email: user.email });

        if (!exitingUser) {
          const newUser = await db.collection("users").insertOne({
            name: user.name,
            email: user.email,
            role: "user",
            contact: user.phoneNumber || ""  ,
            image: user.image,
            status: "active",
            createAt: new Date()
          });

          user.id = newUser.insertedId.toString();
          user.role = "user";
        } 
        else {
          user.id = exitingUser._id.toString();
          user.role = exitingUser.role;
        }
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
        session.user.id = token.id
      }
      return session
    }
  }, 
   pages: {
    signIn: "/",
  }
} 