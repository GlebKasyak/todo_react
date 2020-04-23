import { Router } from "express";
const router: Router = Router();

import TodoController from "./../controllers/todoConteroller";

router.get("/", TodoController.getAllTodos);
router.post("/", TodoController.addTodo);
router.delete("/:id", TodoController.delTodo);
router.get("/:id", TodoController.changeTodoStatus);


export default router;