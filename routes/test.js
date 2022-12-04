import { Router } from "express";

Router.get("/test", (req, res) => {
    
    res.send("Hello World");
});