import socketIO from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ChatPage from "./ChatPage";
import React from "react";

const socket = socketIO.connect(import.meta.env.VITE_SERVER_DOMAIN);
export const SocketContext = React.createContext();
export default function App() {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Chat" element={<ChatPage />}></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </SocketContext.Provider>
  );
}
