import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../myStyle.css";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chat");
  };

  return (
    <div className="login_Container">
      <h2 className="login_header"> Welcome to WHOMAI </h2>
      <h4 className="login_subheader"> Whoever you are </h4>
      <button onClick={handleClick} className="login_CTA">
        Sign in with intra
      </button>
    </div>
  );
}
