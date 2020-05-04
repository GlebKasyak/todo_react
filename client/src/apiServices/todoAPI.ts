import instance from "./api";
import { TodoType } from "../shared/todoTypes";

class todoAPI {
    static getAllTodos = () => instance.get("/todos");

    static addTodo = (data: TodoType) => instance.post("/todos", data);

    static delTodo = (id: string) => instance.delete(`/todos/${ id }`);

    static changeTodoStatus = (id: string) => instance.get(`/todos/${ id }`)
}

export default todoAPI;

