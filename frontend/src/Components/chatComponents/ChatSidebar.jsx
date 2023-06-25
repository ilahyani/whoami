import ContactList from "./ContactList";
import Profile from "./Profile";
import { useContext } from "react";
import { SocketContext } from "../App";

export default function ChatSidebar({ users }) {
  const socket = useContext(SocketContext);

  return (
    <div className="chat_sidebar">
      <Profile users={users} socket={socket} />
      <div className="chat_sidebar_header">
        <h2>Active users</h2>
      </div>
      <ContactList users={users} socket={socket} />
    </div>
  );
}
