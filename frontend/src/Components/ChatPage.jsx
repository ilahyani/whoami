import { useState, useEffect, useRef, useContext } from "react";
import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import MessageForm from "./chatComponents/MessageForm";
import { SocketContext } from "./App";
import "../myStyle.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat_container">
      <ChatSidebar />
      <div className="chat_body">
        <ChatBody
          messages={messages}
          socket={socket}
          lastMessageRef={lastMessageRef}
        />
        <MessageForm socket={socket} />
      </div>
    </div>
  );
}
