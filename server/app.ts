import express from "express";
import cors from "cors";
import dotenvExtended from "dotenv-extended";


import config from "./config";
import connectToDb from "./db";
import rootRouter from "./routes";

dotenvExtended.load();
connectToDb();

const app: express.Application = express();
app.use(express.json());
app.use(cors());

rootRouter(app);

app.listen(config.PORT, () => {
    console.log(`Server up on  ${ config.PORT }`)
});