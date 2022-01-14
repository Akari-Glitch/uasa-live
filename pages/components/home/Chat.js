import { useEffect, useState } from "react"
import { useKey } from "react-use"
import io from "socket.io-client"

const socket = io()
export default function Chat(){

	const [messages, setMessages] = useState([])
    const [text, setText] = useState("")    

     

    const handleChange = (event)=>{
    setText(event.target.value);
  }

  const handlePost = () =>{
     const message = {
        id: new Date().getTime(),
        text: text 
      }

    socket.emit('message', message);
    setMessages([...messages, message]);
    setText("")
   
  }


useEffect(()=>{
    socket.on("message:received", (data) => {
    setMessages([...messages, data]);
        })
}, [handlePost])


  


   return(

        <>
            <div>
    {messages.map(msg=>(
        <p key={String(msg.id)+msg.text}>{msg.text}</p>
    ))}   
            </div>

    <div>
      <textarea
        onChange={handleChange}
      ></textarea>
      <button onClick={handlePost}></button>
    </div>
        </>
    )
}



