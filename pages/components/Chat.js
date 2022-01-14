import { useEffect, useState } from "react"
import io from "socket.io-client"

export default function Chat(){
	const [message, setMessage] = useState("Hola")
	useEffect(() => {
    const socket = io()
    socket.on("test", (msg) => setMessage(msg))
    // if is necesary for unsuscribe
    return () => {
        socket.close()
    }
    }, [])

    return <h1>{message}</h1>
}