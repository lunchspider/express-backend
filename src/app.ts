import express from "express";
import * as bodyParser from 'body-parser';

export class App {
    app: express.Application;
    port: number;
    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port;
        this.app.use(bodyParser.json({ limit : '50mb'}));
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.intializeController(controllers);
    }

    intializeController(controllers: any[]) {
        controllers.forEach((value) => {
            this.app.use("/", value.router);
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Express server is running at port : ${this.port}`);
        });
    }
}
