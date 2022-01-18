import { useState, useEffect } from "react"
import { ReplyStyles } from "../../styles/ChatStyles"
import io from "socket.io-client"
import ReplyIcon from '@mui/icons-material/Reply'
import { useReply } from "../../context/reply-context"

export default function Reply(props){
 const { replyStatus, setReplyStatus, setInfoReply} = useReply();
 const handleReply = () => {
 	console.log(replyStatus)
 	
 	let replyText = document.getElementById(props.idCard).textContent	
 	setInfoReply(replyText)
 	setReplyStatus(!replyStatus)
 }
	return(
		<ReplyStyles onClick = {handleReply}>
			<ReplyIcon />
		</ReplyStyles>

		)
}