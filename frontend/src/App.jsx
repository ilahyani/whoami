import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5001");

console.log(socket);
export default function App() {
  return (
    <div>
      <h1>WHOAMI?</h1>
    </div>
  );
}
