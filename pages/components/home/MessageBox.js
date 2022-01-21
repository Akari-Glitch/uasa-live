import {useState, useEffect} from "react"
import { MessageCard } from "../../styles/ChatStyles"
import Like from "./Like"
import Reply from "./Reply"

export default function MessageBox(props){
  const [clampLimit, setClampLimit] = useState(8);
	const [showReadMore, setShowReadMore] = useState(false)
		
	
	useEffect(()=>{
		let el = document.getElementById(`${props.msg[0]}`)
		
		if(el.clientWidth < el.scrollWidth 
      || el.clientHeight < el.scrollHeight){

			setShowReadMore(true)
		}else{
			setShowReadMore(false)
		}

	}, [clampLimit])



	return(
		<MessageCard clamp = {clampLimit} 
													bgColor={props.authorMsg == props.currentUsername? "#0084FF" : "#dee2e3"}
													textColor={props.authorMsg == props.currentUsername? "white" : "black"}>
										
			<span className="text-contain">
			{props.authorMsg == props.currentUsername?
			null : <span className="username">{props.authorMsg}</span>  }

			{props.toReply[0] === true ? 
				<a>
				<div className="reply-contain">
				<p>{props.toReply[1]} </p> 
				</div>
				</a>
			: null}
			
			<p  className="message" id = {props.msg[0]}>{props.msg[1]}</p>
				{showReadMore ? <span className= "read-more"
				onClick={()=> {setClampLimit(clampLimit*4)}}>leer mas</span> : null}

			</span>
		
	<div className="dinamic-message">
			<Like id = {props.msg[0]}/>
			<Reply idCard = {props.msg[0]}/>
			</div>
		</MessageCard>
		)
}