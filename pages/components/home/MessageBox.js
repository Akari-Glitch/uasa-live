import { MessageCard } from "../../styles/ChatStyles"
import Like from "./Like"

export default function MessageBox(props){


	return(
		<MessageCard>
			<p>{props.msg[1]}</p>
			<Like />
		</MessageCard>
		)
}