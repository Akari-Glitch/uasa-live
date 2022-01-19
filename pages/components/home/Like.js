import { useState, useEffect } from "react"
import FavoriteIcon from  "@mui/icons-material/Favorite";
import { LikeStyles }from "../../styles/ChatStyles"
import { useReply } from "../../context/reply-context"
import io from "socket.io-client"

const socket = io()
export default function Like(props){
	
let [count, setCount] = useState(0)
let [like, setLike] = useState(true)
const {messages, setMessages} = useReply();
let index = messages.map(message => message.id).indexOf(props.id)

const handleCount = ()=>{

		setLike(!like)
		if(like){
			count = 1
		}else{
			count = -1
		}
		setCount(count)

		messages[index].likes = count + messages[index].likes 

		socket.emit('count', messages)
		setMessages(messages)
	}	

	useEffect(()=>{
		socket.on('count:received', (data) =>{
			setMessages([...data])
		})
		
		return ()=>{
			socket.off('count:received')
		}

	}, [like])

	return(
		<>
		<LikeStyles>
			<FavoriteIcon onClick={handleCount} />
			<span>{messages[index].likes === 0 ? "" : messages[index].likes}</span>
		</LikeStyles>
		</>
		)
}