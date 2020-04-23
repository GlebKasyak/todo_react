import instance from "./api";
import { TodoType } from "../shared/todoTypes";

class todoAPI {
    static getAllTodos = () => instance.get("/todos");

    static addTodo = (data: TodoType) => instance.post("/todos", data);

    static delTodo = (id: number) => instance.delete(`/todos/${ id }`);

    static changeTodoStatus = (id: number) => instance.get(`/todos/${ id }`)
}

export default todoAPI;

