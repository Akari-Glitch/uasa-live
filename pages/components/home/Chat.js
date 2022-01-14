import { useEffect, useState } from "react"
import { useKey } from "react-use"
import io from "socket.io-client"

export default function Chat(){

	const [messages, setMessages] = useState([])
    const [text, setText] = useState("")    

    let handleChange = (event)=>{
    setText(event.target.value);
  }


    useEffect(() => {
   
    const socket = io("http://localhost:3000")
     socket.on("message:received", (data) => {
          setMessages(messages.push(data));
        })
////////////////
    
     let addMessage = ()=>{
      const message = {
        id: new Date().getTime(),
        text: text 
      }
///////////////
     let sendMessage = ()=>{
        console.log(text);
        addMessage();
        setText("")
    }
      setMessages(messages.push(message));

      socket.emit('message', message);
    }
 ////////////


    return () => {
        socket.close()
        }
    }, [])



   return(

        <>
        <div>
    { 
        messages.map(message=>{  
      <div>
        <b>
          {message.id}
        </b>
        : { message.text}
      </div>

        })
    }   
            </div>

    <div>
      <textarea
        onChange={handleChange}
      ></textarea>
    </div>
        </>
    )
}



