import ContactList from "./ContactList";
import { useState, useContext, useEffect } from "react";
import { SocketContext } from "../App";

export default function ChatSidebar() {
  const [users, setUsers] = useState([]);
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
      // console.log("newUserResponse", data);
    });
    socket.emit("getUsers");
  }, [socket]);

  return (
    <div className="chat_sidebar">
      <div className="chat_sidebar_header">
        <h2>Active users</h2>
      </div>
      <ContactList users={users} socket={socket} />
    </div>
  );
}
