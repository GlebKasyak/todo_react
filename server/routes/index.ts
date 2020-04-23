import { Application } from "express";

import { default as todoRouter } from "./todo.router";


export default (app: Application) => {
    app.use("/api/todos", todoRouter)
}