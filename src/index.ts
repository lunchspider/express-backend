import { App } from "./app";
import {TestController} from "./controllers/test.controller";
import { createConnection } from "typeorm";
import {StudentController} from "./controllers/student.controller";

const ormconfig = require("../ormconfig.json");

const main = async () => {
    await createConnection(ormconfig);
    const app = new App([new TestController(), new StudentController()], 5000);
    app.listen();
}

main();

