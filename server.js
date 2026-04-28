import express from "express";
import { WebSocketServer } from "ws";
import { createRequire } from "module";
import { setupWSConnection } from "y-websocket/bin/utils";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = Number(process.env.PORT) || 1234;

const server = app.listen(PORT, () => {
  console.log("Listening to the server at port:", PORT);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
  setupWSConnection(ws, req);
});
