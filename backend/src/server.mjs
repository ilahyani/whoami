import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";
import Redis from "ioredis";

dotenv.config();
const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);
const redis = new Redis(process.env.REDIS_URL);

app.use(cors());

let users = [];
const io = new Server(httpServer, { cors: process.env.CLIENT_DOMAIN });
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    users = users.filter((user) => user.socketID !== socket.id);
    io.emit("newUserResponse", users);
    socket.disconnect();
  });
  socket.on("message", async (data) => {
    const key = `message:${new Date().getTime()}`;
    await redis.rpush("msg_keys", key);
    await redis.hmset(key, data);
    console.log(`msg ${key} saved to DB`);
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

app.get("/messages/get", async (request, response) => {
  const msgKeys = await redis.lrange("msg_keys", 0, -1);
  const msgs = [];
  for (let key of msgKeys) {
    const msg = await redis.hgetall(key);
    msgs.push(msg);
  }
  return response.status(200).json(msgs);
});

httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
