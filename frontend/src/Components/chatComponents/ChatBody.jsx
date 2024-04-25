import "../../myStyle.css";
import ChatBodyHeader from "./ChatBodyHeader";
import ChatBodyMessages from "./ChatbodyMessages";

export default function ChatBody({ messages, lastMessageRef }) {
  return (
    <div className="header_and_chat">
      <ChatBodyHeader />
      <ChatBodyMessages messages={messages} />
      <div ref={lastMessageRef} />
    </div>
  );
}
