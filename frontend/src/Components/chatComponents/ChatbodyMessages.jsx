export default function ChatBodyMessages({ messages, socket, users }) {
  return (
    <div className="chatBodyMessages">
      {messages.map((msg) =>
        msg.socketID === socket.id ? (
          <div className="outgoing_msg" key={msg.id}>
            <div className="outgoing_msg_data">
              <div className="outgoing_msg_text">{msg.text}</div>
              <div className="chat_date">Apr 15</div>
            </div>
          </div>
        ) : (
          <div className="incoming_msg" key={msg.id}>
            <div className="avatar">
              <img
                src={
                  users?.find((user) => user.socketID === msg.socketID)?.avatar
                }
                alt="avatar"
              />
            </div>
            <div className="incoming_msg_data">
              <div className="incoming_msg_text">{msg.text}</div>
              <div className="chat_date">Apr 14</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
