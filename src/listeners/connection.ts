import { Server } from "socket.io";

export default ( { io }: { io: Server } ) => {

    io.on("connection", ( socket ) => {
        console.log("connected");
    });

}