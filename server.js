import express from 'express';
import { WebSocketServer } from 'ws';
import { setupWSConnection } from "y-websocket" ; // module issue
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
const PORT = Number(process.env.PORT) || 1234 ;

const server = app.listen(PORT , () => {
    console.log("Listening to the server at port:" , PORT);
});

const wss = new WebSocketServer({ server });

wss.on('connection' , (ws , req) => {
    setupWSConnection(ws , req);
})