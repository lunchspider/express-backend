import express from "express";
export class TestController{
    public path = "/";
    public router  = express.Router();
    constructor(){
        this.router.get(this.path, this.hello);
        this.router.get("/hello/prince", this.hi);
    }
    hello = (req : express.Request, res : express.Response) => {
        res.json({ message : "hello"});
    }
    hi = async (req : express.Request, res : express.Response) => {
        res.json({ message : "hi"});
    }
}
