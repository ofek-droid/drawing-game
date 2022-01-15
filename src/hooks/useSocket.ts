import { useEffect, useState } from "react"

const url = "";
const useSocket = () => {
    const [webSocket,setWebSocket] = useState<null | WebSocket>(null);
    
    useEffect(() => {
        setWebSocket(new WebSocket(url));
        
    },[]);

    return webSocket;
}