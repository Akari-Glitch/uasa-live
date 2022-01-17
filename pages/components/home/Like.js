import { useState, useEffect } from "react"
import FavoriteIcon from  "@mui/icons-material/Favorite";
import { LikeStyles }from "../../styles/ChatStyles"
import io from "socket.io-client"

const socket = io()
export default function Like(){

let [count, setCount] = useState([])
let [like, setLike] = useState(true)

const handleCount = ()=>{
		setLike(!like)
		if(like){
			count.push("")		
		}else{
			count.pop()
		}
		setCount(count)
		socket.emit('count', count);
		
	}

	useEffect(()=>{
		socket.on('count:received', (data) =>{
			setCount([...data])
		})

	}, [count])

	return(
		<>
		<LikeStyles>
			<FavoriteIcon onClick={handleCount} />
			<span>{count.length === 0 ? "" : count.length}</span>
			
		</LikeStyles>
		</>
		)
}