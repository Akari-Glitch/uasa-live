import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Chat  from './components/home/Chat'
import { MessageProvider } from "./context/message-context"
import {SigninContent} from "./styles/SigninStyles"

export default function Home() {

 const [join, setJoin] = useState(false)
 const [currentUser, setCurrentUser] = useState("")
  
  
    return (
      <>
      <Head>
      <title>Uasa Live</title>
    </Head>
     { join ? 
      <>
      <MessageProvider>
      <Chat username={currentUser}/>
      </MessageProvider>
      </>
      

  
    
    : <><
    SigninContent>
    <div className="text-uasa">
      <h1>Uasa Live</h1>
        <p>Simple Chat App with Nextjs.</p>
        <span>by Atari.</span>
    </div>
  
    <div className="input-contain">
     <input id="username"
            type="text" 
            placeholder="escribe tu nombre"
            onChange={(e)=> setCurrentUser(e.target.value) }
            className="user-name" />
     
       <button onClick={()=>setJoin(!join)}>Sign in</button>
       </div>
       </SigninContent>
       </>
     }
     </>
     )
  
}
