import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "./App";
import "../myStyle.css";

function generateRandomUsername() {
  const randomString = Math.random().toString(10).substring(5);
  return `User${randomString}`;
}

export default function Login() {
  const socket = useContext(SocketContext);
  let username;
  const navigate = useNavigate();
  const handleClick = () => {
    username = generateRandomUsername();
    localStorage.setItem("userName", username);
    console.log("innn");
    socket.emit("newUser", { username, socketID: socket.id }); //add avatar
    navigate("/chat");
  };

  return (
    <div className="login_Container">
      <h2 className="login_header"> Welcome to WHOAMI </h2>
      <h4 className="login_subheader"> Whoever you are </h4>
      <button onClick={handleClick} className="login_CTA">
        Get in
      </button>
    </div>
  );
}
