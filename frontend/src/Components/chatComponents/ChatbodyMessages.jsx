export default function ChatBodyMessages({ messages, socket }) {
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
              <img src="https://avatarfiles.alphacoders.com/210/thumb-1920-210954.png" />
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
