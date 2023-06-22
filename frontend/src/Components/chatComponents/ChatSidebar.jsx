import ContactList from "./ContactList";
import { useEffect, useState } from "react";

export default function ChatSidebar({ socket }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
      console.log("users", data[data.length - 1]);
    });
  }, [socket, users]);
  return (
    <div className="chat_sidebar">
      <div className="chat_sidebar_header">
        <h1>Active users</h1>
      </div>
      <ContactList users={users} socket={socket} />
    </div>
  );
}
