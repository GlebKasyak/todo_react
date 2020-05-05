import { combineReducers } from "redux";

import todo from "./todo.reducer";

const rootReducer = combineReducers({
    todo
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


export default rootReducer;