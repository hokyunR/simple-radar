const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.of("/radar").on("connection", () => {
  setInterval(() => {
    const data = Array.from({ length: 500 }).map((item) => ({
      pos: {
        x: Math.round(Math.random() * 400),
        y: Math.round(Math.random() * 400),
      },
      bearing: Math.round(Math.random() * 360),
    }));
    io.of("/radar").emit("data", data);
  }, 160);
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
