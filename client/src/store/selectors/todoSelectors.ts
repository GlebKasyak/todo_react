import { AppStateType } from "../reducers";

export default class TodoSelectors {
    static getIsLoading = (state: AppStateType) => state.todo.isLoading;

    static getError = (state: AppStateType) => state.todo.error;
}