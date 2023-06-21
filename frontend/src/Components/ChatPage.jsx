import { useState, useEffect } from "react";
import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import MessageForm from "./chatComponents/MessageForm";
import "../myStyle.css";

export default function ChatPage({ socket }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
      console.log("msg from", data.name);
    });
  }, [socket, messages]);
  return (
    <div className="chat_container">
      <ChatSidebar />
      <div className="chat_body">
        <ChatBody messages={messages} socket={socket} />
        <MessageForm socket={socket} />
      </div>
    </div>
  );
}
