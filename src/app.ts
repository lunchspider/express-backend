import express from "express";

export class App {
    app: express.Application;
    port: number;
    constructor(controllers: any[], port: number) {
        this.app = express();
        this.port = port;
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
