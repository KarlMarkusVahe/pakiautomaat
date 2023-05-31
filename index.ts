import express, { Express, Request, Response } from "express";
//import cors from "cors";
import bodyParser from "body-parser";
import parcelmachine from "./parcelmachine";

const app: Express = express();

/*app.use(cors({
    origin: ['http://localhost:3006']
}));*/
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', parcelmachine);

app.listen(3000,() => {
    console.log(`[Server]: Server is running at http://localhost:3000`);
});