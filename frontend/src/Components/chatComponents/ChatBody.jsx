import MessageForm from "./MessageForm";
import ChatBodyHeader from "./ChatBodyHeader";
import ChatBodyMessages from "./ChatbodyMessages";

export default function ChatBody() {
  return (
    <div className="chat_body">
      <div className="header_and_chat">
        <ChatBodyHeader />
        <ChatBodyMessages />
      </div>
      <MessageForm />
    </div>
  );
}
