export interface Action<T,P> {
    type: T;
    payload: P;
}

export type TodoState = {
    todos: Array<TodoType>
}

export type TodoType = {
    _id?: string,
    completed: boolean,
    title: string
}
