import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);

app.use(cors);

let users = [];
const io = new Server(httpServer, { cors: process.env.CLIENT_DOMAIN });
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit("newUserResponse", users);
    socket.disconnect();
  });
  socket.on("message", (data) => {
    io.emit("messageResponse", data);
  });
  socket.on("newUser", (data) => {
    console.log(`⚡: ${data.socketID} ${data.username} just connected!`);
    users.push(data);
  });
  socket.on("getUsers", () => {
    io.emit("newUserResponse", [...users]);
  });
});

httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
