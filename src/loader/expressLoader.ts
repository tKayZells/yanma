import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import routes from "../api";
import path from "path";

export default ( { app }: { app: express.Application } ) => {
    
    /**
     * Setup
     */
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '/../client/build')));

    // Starting route
    app.get("/", (req, res) => {
        return res.status(200).sendFile(path.join(__dirname + '/../client/build/index.html'));
    });

    /**
     * Load remaining routes 
     */
    app.use("/", routes());
}