import ChatBodyHeader from "./ChatBodyHeader";
import ChatBodyMessages from "./ChatbodyMessages";
import "../../myStyle.css";

export default function ChatBody({ messages, socket }) {
  return (
    <div className="header_and_chat">
      <ChatBodyHeader socket={socket} />
      <ChatBodyMessages messages={messages} socket={socket} />
    </div>
  );
}
