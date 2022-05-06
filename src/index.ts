import { App } from "./app";
import {TestController} from "./controllers/test.controller";

const app = new App([new TestController()], 5000);

app.listen();


