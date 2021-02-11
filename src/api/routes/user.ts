import { Request, Response, Router } from "express";

export default ( app: Router ) => {

    app.get("/user", (req : Request, res : Response) => {
        return res.status(200).send("<h1>User /</h1>");
    });
    
}