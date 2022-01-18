import { MessageCard } from "../../styles/ChatStyles"
import Like from "./Like"
import Reply from "./Reply"

export default function MessageBox(props){
  
	return(
		<MessageCard >
			{props.toReply[0] === true ? <p>reply to: {props.toReply[1]} </p> : null}
			<p id = {props.msg[0]}>{props.msg[1]}</p>
			<Like id = {String(props.msg[0]) + "like"}/>
			<Reply idCard = {props.msg[0]}/>
		</MessageCard>
		)
}