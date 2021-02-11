import { Server } from "socket.io";
import connection from "../listeners/connection";

export default ( { io }: { io: Server } ) => {
    
    connection( { io } );

}