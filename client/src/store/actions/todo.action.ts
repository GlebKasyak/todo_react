import { ThunkAction } from "redux-thunk";

import * as todoTypes from "../types/todoTypes";
import { todoAPI } from "../../apiServices";
import { AppStateType } from "../reducers";
import { TodoType, Action } from "../../shared/todoTypes";

type GetAllTodosType = Action<typeof todoTypes.GET_ALL_TODOS, Array<TodoType>>;
const getAllTodosAC = (payload: Array<TodoType>): GetAllTodosType => ({ type: todoTypes.GET_ALL_TODOS, payload });

type AddTodoType = Action<typeof todoTypes.ADD_TODO, TodoType>;
const addTodoAC = (payload: TodoType): AddTodoType => ({ type: todoTypes.ADD_TODO, payload });

type ChangeTodoStatusType = Action<typeof todoTypes.CHANGE_TODO_STATUS, string>;
const changeTodoStatusAC = (payload: string): ChangeTodoStatusType => ({ type: todoTypes.CHANGE_TODO_STATUS, payload });

type DelTodoType = Action<typeof todoTypes.DELETE_TODO, string>;
const delTodoAC =(payload: string): DelTodoType => ({ type: todoTypes.DELETE_TODO, payload });

export type ActionTypes =
    | GetAllTodosType
    | AddTodoType
    | ChangeTodoStatusType
    | DelTodoType


type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getAllTodos = (): ThunkActionType => async dispatch => {
    const response = await todoAPI.getAllTodos();
    const { success, todos } = response.data;

    if(success) dispatch(getAllTodosAC(todos));
};

export const addTodo = (data: TodoType): ThunkActionType => async dispatch => {
    const response = await todoAPI.addTodo(data);
    const { success, todo } = response.data;

    if(success) dispatch(addTodoAC(todo));
};

export const changeTodoStatus = (id: string): ThunkActionType => async dispatch => {
    const response = await todoAPI.changeTodoStatus(id);

    if(response.data.success) dispatch(changeTodoStatusAC(id));
};

export const delTodo = (id: string): ThunkActionType => async dispatch => {
    const response = await todoAPI.delTodo(id);

    if(response.data.success) dispatch(delTodoAC(id));
};

