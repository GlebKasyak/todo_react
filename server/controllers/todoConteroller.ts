import { RequestHandler } from "express";
import TodoService from "../services/todoService";
import { ITodoDocument } from "../interfaces/todoTypes";

class TodoController {
    constructor() {};

    static getAllTodos: RequestHandler = async (req, res) => {
        try {
            const todos: Array<ITodoDocument> = await TodoService.getAllTodos();
            res.json({ message: "All todos", todos, success: true });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    };

    static addTodo: RequestHandler = async (req, res) => {
        try {
            const todo: ITodoDocument = await TodoService.addTodo(req.body);
            res.json({ message: "add new todo", todo, success: true });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    };

    static delTodo: RequestHandler = async (req, res) => {
        try {
            await TodoService.delTodo(req.params.id);
            res.json({ message: "todo is deleted", success: true });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    };

    static changeTodoStatus: RequestHandler = async(req, res) => {
        try {
            await TodoService.changeTodoStatus(req.params.id);
            res.json({ message: "status changed", success: true });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }
}

export default TodoController;