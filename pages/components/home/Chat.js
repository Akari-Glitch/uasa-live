import { useEffect, useState } from "react"
import { useKey } from "react-use"
import io from "socket.io-client"
import SendIcon from "@mui/icons-material/Send"
import  { ChatContain } from "../../styles/ChatStyles"
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
 let chatBox = document.getElementById("messages-contain")
   chatBox.scrollTop = chatBox.scrollHeight;

    return ()=>{
        setReplyStatus(false)
        setInfoReply(null)
        socket.off("message:received")
    }
   
}, [messages])


  


   return(

        <>
            <ChatContain>

            <div id="messages-contain" className= "messages-contain">
    {messages.map(msg=>(<MessageBox 
                        msg = {[msg.id, msg.text]}  
                        key={String(msg.id) + msg.text}
                        toReply = {[msg.isReply, msg.infoReply]}/>))}  
            </div>

<div className="send-message">
      <input
        placeholder="Escribe un mensaje"
        onChange={handleChange}
      ></input>
      <div className = "send-btn"><SendIcon  onClick={handlePost}/></div>

        </div>
    </ChatContain>
        </>
    )
}
