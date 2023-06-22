import { useState, useEffect, useRef } from "react";
import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import MessageForm from "./chatComponents/MessageForm";
import "../myStyle.css";

export default function ChatPage({ socket }) {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

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
      <ChatSidebar socket={socket} />
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
