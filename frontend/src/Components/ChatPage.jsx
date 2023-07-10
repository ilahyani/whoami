import { useState, useEffect, useRef, useContext } from "react";
import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import MessageForm from "./chatComponents/MessageForm";
import { SocketContext } from "./App";
import { Navigate } from "react-router-dom";
import "../myStyle.css";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
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

  useEffect(() => {
    socket.emit("getUsers");
    socket.on("newUserResponse", (data) => {
      setUsers(data);
    });
  }, [socket]);

  if (!users.find((user) => user.socketID === socket.id)) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="chat_container">
      <ChatSidebar users={users} />
      <div className="chat_body">
        <ChatBody
          messages={messages}
          socket={socket}
          lastMessageRef={lastMessageRef}
          users={
            localStorage.getItem("users")
              ? JSON.parse(localStorage.getItem("users"))
              : users
          }
        />
        <MessageForm socket={socket} />
      </div>
    </div>
  );
}
