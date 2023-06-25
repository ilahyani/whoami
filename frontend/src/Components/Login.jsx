import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SocketContext } from "./App";
import "../myStyle.css";

export default function Login() {
  const socket = useContext(SocketContext);
  const [username, setUsrname] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // const username = generateRandomUsername();
      const avatarSrc = `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}`;
      localStorage.setItem("userName", username);
      socket.emit("newUser", {
        username,
        socketID: socket.id,
        avatar: avatarSrc,
      });
      navigate("/chat");
    }
  };

  return (
    <div className="login_Container">
      <h2 className="login_header"> Welcome to WHOAMI </h2>
      <h4 className="login_subheader"> what should we call you? </h4>
      <form className="username_form" onSubmit={handleClick}>
        <input
          className="username_form_input"
          type="text"
          placeholder="Enter a name"
          value={username}
          onChange={(e) => {
            setUsrname(e.target.value);
          }}
          required
        />
      </form>
      <button onClick={handleClick} className="login_CTA">
        Get in
      </button>
    </div>
  );
}
