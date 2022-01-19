import {useState} from "react"
import { MessageCard } from "../../styles/ChatStyles"
import Like from "./Like"
import Reply from "./Reply"

export default function MessageBox(props){
  const [clampLimit, setClampLimit] = useState(8);
	


	return(
		<MessageCard clamp = {clampLimit}>
			{props.toReply[0] === true ? <p>reply to: {props.toReply[1]} </p> : null}
			<p  id = {String(props.msg[0]) + "text"}>{props.msg[1]}</p>
		{/*	<button onClick={()=> {
				handleEvent()
				setClampLimit(clampLimit+20)}}
				>leer mas</button>
*/}
			<Like id = {props.msg[0]}/>
			<Reply idCard = {props.msg[0]}/>
		</MessageCard>
		)
}