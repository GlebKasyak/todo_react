import { Reducer } from "redux";

import * as todoTypes from "../types/todoTypes";
import { TodoState } from "../../shared/todoTypes";
import { todosActions } from "../actions/todo.action";
import { InferActionsTypes } from "./index";


const initialState: TodoState = {
    todos: [],
    error: false,
    isLoading: false
};

type ActionsTypes = InferActionsTypes<typeof todosActions>;

const reducer: Reducer<TodoState, ActionsTypes> = (state = initialState, action ) => {
    switch (action.type) {
        case todoTypes.GET_ALL_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            };
        case todoTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                isLoading: false
            };
        case todoTypes.CHANGE_TODO_STATUS_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
                ),
                isLoading: false
            };
        case todoTypes.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload),
                isLoading: false
            };
        case todoTypes.TODOS_IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case todoTypes.TODOS_FAILURE:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        default:
            return state;
    }
};

export default reducer;