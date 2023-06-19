import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import "../myStyle.css";

export default function ChatPage() {
  return (
    <div className="chat_container">
      <ChatSidebar />
      <ChatBody />
    </div>
  );
}
