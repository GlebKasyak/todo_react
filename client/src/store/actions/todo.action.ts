import * as todoTypes from "../types/todoTypes";
import { TodoType } from "../../shared/todoTypes";

export const todosActions = {
    getAllTodosRequestAC: () => ({ type: todoTypes.GET_ALL_TODOS_REQUEST } as const),
    getAllTodosSuccessAC: (payload: Array<TodoType>) => ({ type: todoTypes.GET_ALL_TODOS_SUCCESS, payload } as const),

    addTodoRequestAC: (payload: TodoType) => ({ type: todoTypes.ADD_TODO_REQUEST, payload } as const),
    addTodoSuccessAC: (payload: TodoType) => ({ type: todoTypes.ADD_TODO_SUCCESS, payload } as const),

    changeTodoStatusRequestAC: (payload: string) => ({ type: todoTypes.CHANGE_TODO_STATUS_REQUEST, payload } as const),
    changeTodoStatusSeccessAC: (payload: string) => ({ type: todoTypes.CHANGE_TODO_STATUS_SUCCESS, payload } as const),

    delTodoRequestAC: (payload: string) => ({ type: todoTypes.DELETE_TODO_REQUEST, payload } as const),
    delTodoSuccessAC: (payload: string) => ({ type: todoTypes.DELETE_TODO_SUCCESS, payload } as const),

    todosLoadingAC: () => ({ type: todoTypes.TODOS_IS_LOADING } as const),
    todoFailureAC: () => ({ type: todoTypes.TODOS_FAILURE } as const),
};

