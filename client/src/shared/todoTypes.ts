export interface Action<P = any> {
    type: string;
    payload?: P
}

export type TodoState = {
    todos: Array<TodoType>,
    error: boolean,
    isLoading: boolean
}

export type TodoType = {
    _id?: string,
    completed: boolean,
    title: string
}
