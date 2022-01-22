import React, {useState, useEffect, useMemo} from "react";

const MessageContext = React.createContext();

export function MessageProvider(props){
	const [replyStatus, setReplyStatus] = useState(false)
	const [infoReply, setInfoReply] = useState("");
    const [messages, setMessages] = useState([])

	const value = useMemo(()=>{

		return({replyStatus, setReplyStatus, infoReply, setInfoReply, messages, setMessages})
	}, [replyStatus, messages, infoReply])

	return <MessageContext.Provider value={value} {...props}/>
}

export function useMessage(){
	const context = React.useContext(MessageContext)

	if(!context){
		throw new Error('error')
	}

	return context;
}