import { useState } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const handleSumbmit = (e) => {
    e.preventDefault();
    console.log(message, "sent");
    setMessage("");
  };
  return (
    <div className="send_msg">
      <form
        className="msg_form"
        onSubmit={(e) => {
          handleSumbmit(e);
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
