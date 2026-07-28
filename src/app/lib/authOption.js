import Credentials from "next-auth/providers/credentials"
import clientPromise from "./dbConnect"
import bcrypt from "bcrypt"; 

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
   
    
  ], 
  session: {
    strategy: "jwt",
  }, 
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
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
    signIn: "/login",
  }
} 