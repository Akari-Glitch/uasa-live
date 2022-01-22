import { useState, useEffect } from "react"
import { ReplyStyles, ReplyContain } from "../../styles/ChatStyles"
import io from "socket.io-client"
import ReplyIcon from '@mui/icons-material/Reply'
import { useMessage } from "../../context/message-context"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"

export default function Reply(props){
 const { replyStatus, setReplyStatus, setInfoReply} = useMessage();

 const handleReply = () => {
 	
 	let replyText = document.getElementById(props.idCard).textContent	
 	setInfoReply(replyText)
 	setReplyStatus(true)
 }
	return(
		<ReplyStyles onClick = {handleReply}>
			<ReplyIcon />
		</ReplyStyles>

		)
}


export function ReplyBox(){

	const {infoReply, setReplyStatus} = useMessage()

	const handleCloseReply = ()=>setReplyStatus(false)
	return(
		<ReplyContain>
		<span className="text-contain-reply">
	<CloseOutlinedIcon onClick={handleCloseReply} className="close-reply"/>
		<p>{infoReply}</p>
		</span>
		</ReplyContain>
		)
}