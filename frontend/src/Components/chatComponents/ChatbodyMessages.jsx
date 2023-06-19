import ChatOutoingMessage from "./ChatOutgoingMessage";
import ChatIncomingMessage from "./ChatIncomingMessage";

export default function ChatBodyMessages() {
  return (
    <div className="messages_list">
      <ChatIncomingMessage />
      <ChatOutoingMessage />
    </div>
  );
}
