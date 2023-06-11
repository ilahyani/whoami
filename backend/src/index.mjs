import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app = express();
const httpServer = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello from server");
});

httpServer.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
