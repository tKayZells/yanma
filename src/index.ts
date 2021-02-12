"use strict";
import express from "express";
import http from "http";
import { Server as ioserver } from 'socket.io';
import expressLoader from "./loader/expressLoader";
import ioLoader from "./loader/ioLoader";

const port = 3001;

async function start(){

    const app = express();
    await expressLoader({ app });

    const server = http.createServer(app);

    const io = new ioserver(server, { });

    await ioLoader({ io });

    server.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
}

start();