import { ThunkAction } from "redux-thunk";

import * as todoTypes from "../types/todoTypes";
import { todoAPI } from "../../apiServices";
import { AppStateType, InferActionsTypes } from "../reducers";

import { TodoType } from "../../shared/todoTypes";

export const todoActions = {
    getAllTodosAC: (payload: Array<TodoType>) => ({ type: todoTypes.GET_ALL_TODOS, payload } as const),
    addTodoAC: (payload: TodoType) => ({ type: todoTypes.ADD_TODO, payload } as const),
    changeTodoStatusAC: (payload: string) => ({ type: todoTypes.CHANGE_TODO_STATUS, payload } as const),
    delTodoAC: (payload: string) => ({ type: todoTypes.DELETE_TODO, payload } as const),
}

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, InferActionsTypes<typeof todoActions>>;

export const getAllTodos = (): ThunkActionType => async dispatch => {
    const response = await todoAPI.getAllTodos();
    const { success, todos } = response.data;

    if(success) dispatch(todoActions.getAllTodosAC(todos));
};

export const addTodo = (data: TodoType): ThunkActionType => async dispatch => {
    const response = await todoAPI.addTodo(data);
    const { success, todo } = response.data;

    if(success) dispatch(todoActions.addTodoAC(todo));
};

export const changeTodoStatus = (id: string): ThunkActionType => async dispatch => {
    const response = await todoAPI.changeTodoStatus(id);

    if(response.data.success) dispatch(todoActions.changeTodoStatusAC(id));
};

export const delTodo = (id: string): ThunkActionType => async dispatch => {
    const response = await todoAPI.delTodo(id);

    if(response.data.success) dispatch(todoActions.delTodoAC(id));
};

