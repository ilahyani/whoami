import { useNavigate } from "react-router-dom";
import "../myStyle.css";

function generateRandomUsername() {
  const randomString = Math.random().toString(10).substring(5);
  const username = `User${randomString}`;
  return username;
}

export default function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("userName", generateRandomUsername());
    console.log("UserName", localStorage.getItem("userName"));
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
