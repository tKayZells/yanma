import { Router } from "express";
import Chat from "./routes/chat";
import User from "./routes/user";

export default () => {
    const app = Router();
    Chat(app);
    User(app);

    return app
}