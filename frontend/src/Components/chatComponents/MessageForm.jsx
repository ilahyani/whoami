import { useState } from "react";

export default function MessageForm({ socket }) {
  const user = JSON.parse(localStorage.getItem("users"));
  const { username, avatar } = user[0];
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", {
        text: message,
        name: username,
        avatar: avatar,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="send_msg">
      <form
        className="msg_form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="msg_form_input"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
