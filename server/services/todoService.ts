import Todo from "../models/todoModel";
import { ITodoDocument } from "../typescript/todoTypes";

class TodoService {
    constructor() {};

    static getAllTodos = async (): Promise<Array<ITodoDocument>> => await Todo.find({});

    static addTodo = async (data: ITodoDocument): Promise<ITodoDocument> => {
        const todo = await Todo.create(data);
        if(!todo) throw new Error("Error: todo do not create");

        return todo;
    };

    static delTodo = async (id: string) => await Todo.findOneAndRemove({ _id: id });

    static changeTodoStatus = async (id: string) => {
        const todo = await Todo.findOne({ _id: id }) as ITodoDocument;

        todo.completed = !todo.completed;
        todo.save();
    }
}

export default TodoService;