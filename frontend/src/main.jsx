import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
