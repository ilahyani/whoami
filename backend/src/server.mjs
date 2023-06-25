import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config({ path: "/Users/ilahyani/web/whoami/backend/.env" });
const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);

app.use(cors);

let users = [];
const io = new Server(httpServer, { cors: process.env.CLIENT_DOMAIN });
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit("newUserResponse", users);
    socket.disconnect();
  });
  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
  });
  socket.on("newUser", (data) => {
    users.push(data);
    // console.log("newUser");
    // io.emit("newUserResponse", [...users]);
  });
  socket.on("getUsers", () => {
    // users.push(data);
    // console.log("getUsers");
    io.emit("newUserResponse", [...users]);
  });
});

httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
