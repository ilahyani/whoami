import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config({ path: "/Users/ilahyani/web/whoami/.env" });
const port = process.env.PORT;

const app = express();
const httpServer = createServer(app);

app.use(cors);

const io = new Server(httpServer, { cors: "http://localhost:5173/" });
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  io.to(socket).emit("hello react client" + socket.id);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("hello from server");
});
httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
