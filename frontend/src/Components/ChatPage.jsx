import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatBody from "./chatComponents/ChatBody";
import MessageForm from "./chatComponents/MessageForm";
import "../myStyle.css";

export default function ChatPage() {
  return (
    <div className="chat_container">
      <ChatSidebar />
      <div className="chat_body">
        <ChatBody />
        <MessageForm />
      </div>
    </div>
  );
}
