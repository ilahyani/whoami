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
      const avatarSrc = `https://api.dicebear.com/6.x/adventurer/svg?seed=${
        username + Math.random().toString().substring(2)
      }`;
      const newUser = {
        username: username,
        socketID: socket.id,
        avatar: avatarSrc,
      };
      const availableUsers = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      localStorage.setItem(
        "users",
        JSON.stringify([...availableUsers, newUser])
      );
      socket.emit("newUser", newUser);
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
