import socketIO from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Login";
import ChatPage from "./ChatPage";

const socket = socketIO.connect(import.meta.env.VITE_SERVER_DOMAIN);
// console.log(socket);
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/Chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
