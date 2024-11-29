import { GameOfLife } from "./GameOfLife";
import { Server } from "socket.io";
const express = require("express");
const http = require("http");

interface ServerToClientEvents {
    toggleOnClient: (x: number, y: number, alive: boolean) => void;
    refreshClient: (
        n: number,
        m: number,
        board: boolean[],
        nextUpdateTime: number
    ) => void;
}

interface ClientToServerEvents {
    requestToggle: (x: number, y: number, alive: boolean) => void;
    requestRefresh: () => void;
}

interface InterServerEvents {}

interface SocketData {}

const MAIN_ROOM = "main room";
let game = new GameOfLife(10, 10);
const app = express();
const server = http.createServer(app);
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server: Listening to port ${port}.`);
});

io.on("connection", (socket) => {
    console.log("User connected!");
    socket.join(MAIN_ROOM);
    socket.on("requestRefresh", () => {
        console.log("requestRefresh received.");
        socket.emit(
            "refreshClient",
            game.getWidth(),
            game.getHeight(),
            game.getBoard(),
            0
        );
    });
    socket.on("requestToggle", (x: number, y: number, alive: boolean) => {
        console.log(`requestToggle (${x}, ${y}) received.`);
        game = game.toggle(x, y, alive);
        io.to(MAIN_ROOM).emit("toggleOnClient", x, y, game.getTileAt(x, y));
    });
});
