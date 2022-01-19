import { useEffect, useState } from "react"
import { useKey } from "react-use"
import io from "socket.io-client"
import  { MessagesContain } from "../../styles/ChatStyles"
import MessageBox from "./MessageBox"
import { useReply } from "../../context/reply-context"
import Like from "./Like"

const socket = io()

export default function Chat(){
    const [text, setText] = useState("")        
    const { replyStatus, setReplyStatus, infoReply, setInfoReply, messages, setMessages} = useReply();

    const handleChange = (event)=>{
    setText(event.target.value);
  }

  const handlePost = () =>{
     const message = {
        id: new Date().getTime(),
        text: text,
        isReply: replyStatus,
        infoReply: infoReply,
        likes: 0
      }

    socket.emit('message', message);
    setMessages([...messages, message]);
    setText("")
   
  }


useEffect(()=>{
    socket.on("message:received", (data) => {
    setMessages([...messages, data]);
        })

    return ()=>{
        setReplyStatus(false)
        setInfoReply(null)
        socket.off("message:received")
    }
   
}, [messages])


  


   return(

        <>
            <MessagesContain>

    {messages.map(msg=>(<MessageBox 
                        msg = {[msg.id, msg.text]}  
                        key={String(msg.id) + msg.text}
                        toReply = {[msg.isReply, msg.infoReply]}/>))}  
            </MessagesContain>

    <div>


      <textarea
        onChange={handleChange}
      ></textarea>
      <button onClick={handlePost}></button>
    </div>
        </>
    )
}
