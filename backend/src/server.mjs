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

const io = new Server(httpServer, { cors: process.env.CLIENT_DOMAIN });
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
  socket.on("message", (data) => {
    console.log(data);
    io.emit("messageResponse", data);
  });
});
app.get("/", (req, res) => {
  res.send("hello from server");
});
httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
