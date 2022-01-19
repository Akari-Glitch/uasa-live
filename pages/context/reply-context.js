import React, {useState, useEffect, useMemo} from "react";

const ReplyContext = React.createContext();

export function ReplyProvider(props){
	const [replyStatus, setReplyStatus] = useState(false)
	const [infoReply, setInfoReply] = useState("");
    const [messages, setMessages] = useState([])

	const value = useMemo(()=>{
		return({replyStatus, setReplyStatus, infoReply, setInfoReply, messages, setMessages})
	}, [replyStatus, messages])

	return <ReplyContext.Provider value={value} {...props}/>
}

export function useReply(){
	const context = React.useContext(ReplyContext)

	if(!context){
		throw new Error('error')
	}

	return context;
}