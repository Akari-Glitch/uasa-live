import { useEffect, useState } from "react"
import { useKey } from "react-use"
import io from "socket.io-client"
import SendIcon from "@mui/icons-material/Send"
import  { ChatContain } from "../../styles/ChatStyles"
import MessageBox from "./MessageBox"
import { useReply } from "../../context/reply-context"
import Like from "./Like"
import {ReplyBox} from "./Reply"
const socket = io()

export default function Chat(props){
    const [text, setText] = useState("")        
    const { replyStatus, setReplyStatus, infoReply, setInfoReply, messages, setMessages} = useReply();

    const handleChange = (event)=>{
    setText(event.target.value);
  }

  const handlePost = () =>{
    if(!!text){
      document.getElementById("input-message").value = "";  
     const message = {
        id: new Date().getTime(),
        text: text,
        isReply: replyStatus,
        infoReply: infoReply,
        likes: 0,
        author:props.username
      }

    socket.emit('message', message);
    setMessages([...messages, message]);
    setText("")
   }

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
                        authorMsg={msg.author}
                        currentUsername={props.username}
                        key={String(msg.id) + msg.text}
                        toReply = {[msg.isReply, msg.infoReply]}/>))}  
            </div>


           
<div className="send-message">
    {replyStatus ? <ReplyBox /> : null}
    <div className="contain-input">
      <input
        id="input-message"
        placeholder="Escribe un mensaje"
        onChange={handleChange}
      ></input>
      <div className = "send-btn"><SendIcon  onClick={handlePost}/></div>
      </div>
        </div>
    </ChatContain>
        </>
    )
}
