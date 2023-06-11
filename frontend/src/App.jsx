import socketIO from "socket.io-client";
const socket = socketIO.connect(import.meta.env.VITE_SERVER_DOMAIN);

console.log(socket);
export default function App() {
  return (
    <div>
      <h1>WHOAMI?</h1>
    </div>
  );
}
