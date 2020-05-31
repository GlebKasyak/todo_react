import { call, put, takeEvery } from "redux-saga/effects";

import { todoAPI } from "../../apiServices";
import { TodoType, Action } from "../../shared/todoTypes";
import { todosActions } from "../actions/todo.action";
import * as todoTypes from "../types/todoTypes";

function* getAllTodos() {
    try {
        yield put(todosActions.todosLoadingAC());

        const res = yield call(todoAPI.getAllTodos);
        yield put(todosActions.getAllTodosSuccessAC(res.data.todos));
    } catch(err) {
        yield put(todosActions.todoFailureAC());
    }
};

function* addTodo(action: Action<TodoType>) {
    try {
        yield put(todosActions.todosLoadingAC());

        const res = yield call(todoAPI.addTodo, action.payload!);
        yield put(todosActions.addTodoSuccessAC(res.data.todo));
    } catch(err) {
        yield put(todosActions.todoFailureAC());
    }
};

function* changeTodoStatus(action: Action<string>) {
    try {
        yield put(todosActions.todosLoadingAC());

        yield call(todoAPI.changeTodoStatus, action.payload!);
        yield put(todosActions.changeTodoStatusSeccessAC(action.payload!));
    } catch(err) {
        yield put(todosActions.todoFailureAC());
    }
};

function* delTodo(action: Action<string>) {
    try {
        yield put(todosActions.todosLoadingAC());

        yield call(todoAPI.delTodo, action.payload!);
        yield put(todosActions.delTodoSuccessAC(action.payload!));
    } catch(err) {
        yield put(todosActions.todoFailureAC());
    }
};

export default [
    takeEvery(todoTypes.GET_ALL_TODOS_REQUEST, getAllTodos),
    takeEvery(todoTypes.ADD_TODO_REQUEST, addTodo),
    takeEvery(todoTypes.CHANGE_TODO_STATUS_REQUEST, changeTodoStatus),
    takeEvery(todoTypes.DELETE_TODO_REQUEST, delTodo),
];