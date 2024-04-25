import { SocketContext } from "../App";
import { useContext } from "react";

export default function ChatBodyMessages({ messages }) {
  const socket = useContext(SocketContext);
  return (
    <div className="chatBodyMessages">
      {messages.map((msg) =>
        msg.socketID === socket.id ? (
          <div className="outgoing_msg" key={msg.id}>
            <div className="outgoing_msg_text">{msg.text}</div>
          </div>
        ) : (
          <div className="incoming_msg" key={msg.id}>
            <div className="avatar">
              <img src={msg.avatar} alt="avatar" />
            </div>
            <div className="incoming_msg_data">
              <div className="incoming_msg_text">{msg.text}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
