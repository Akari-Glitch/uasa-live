import {useState} from "react"
import Head from 'next/head'
import Image from 'next/image'
import Chat  from './components/home/Chat'
import { ReplyProvider } from "./context/reply-context"
export default function Home() {

 const [join, setJoin] = useState(false)
 const [currentUser, setCurrentUser] = useState("")

  if (join) {
    return (
      <>
    
      <ReplyProvider>
      <Chat username={currentUser}/>
      </ReplyProvider>
      
      </>
    )
  }
  return (
    <>
   
    <label htmlFor="username">UserName</label>
     <input id="username"
            type="text" 
            placeholder="escribe tu nombre"
            onChange={(e)=> setCurrentUser(e.target.value) }
            className="user-name" />
     
       <button onClick={()=>{
      console.log(currentUser)
      setJoin(!join)}}></button>
    </>
  )
}
