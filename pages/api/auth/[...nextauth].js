import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import EmailProvider from "next-auth/providers/email";
import clientPromise from "./lib/mongodb"


export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
     EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       })],
  
  secret: process.env.SECRET,

})