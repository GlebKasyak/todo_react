import { Reducer } from "redux";

import * as todoTypes from "../types/todoTypes";
import { TodoState } from "../../shared/todoTypes";
import { InferActionsTypes } from "./index";
import { todoActions } from "../actions/todo.action";


const initialState: TodoState = {
    todos: []
};

type ActionsTypes = InferActionsTypes<typeof todoActions>;

const reducer: Reducer<TodoState, ActionsTypes> = (state = initialState, action ) => {
    switch (action.type) {
        case todoTypes.GET_ALL_TODOS:
            return { todos: action.payload };
        case todoTypes.ADD_TODO:
            return { todos: [...state.todos, action.payload] };
        case todoTypes.CHANGE_TODO_STATUS:
            return {
                todos: state.todos.map(todo =>
                    todo._id === action.payload ? { ...todo, completed: !todo.completed }: todo)
            };
        case todoTypes.DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo._id !== action.payload)
            }
        default:
            const exhaustiveCheck: never = action;
            return state;
    }
};

export default reducer;