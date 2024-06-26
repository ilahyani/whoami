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
    sessionStorage.getItem("users")
      ? JSON.parse(sessionStorage.getItem("users"))
      : []
  );
  const lastMessageRef = useRef(null);
  const socket = useContext(SocketContext);

  window.onbeforeunload = function () {
    sessionStorage.clear();
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_DOMAIN}/messages/get`
        );
        const history = await res.json();
        setMessages(history);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMessages();
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages((msgs) => {
        return msgs.concat(data);
      });
    });
  }, [socket]);

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
        <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
        <MessageForm />
      </div>
    </div>
  );
}
