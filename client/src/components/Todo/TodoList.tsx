import React, { FC } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";

import { AppStateType } from "../../store/reducers";
import { TodoType } from "../../shared/todoTypes";

type MapStateToProps = {
    todos: Array<TodoType>
}

type OwnProps = {
  markComplete: (id: string) => void,
  deleteTodo: (id: string) => void
}

type Props = MapStateToProps & OwnProps;

const TodoList: FC<Props> = ({ todos, markComplete, deleteTodo }) =>  (
    <>
        { !!todos.length ? todos.map(todo =>
                <TodoItem
                    key={ todo._id }
                    todo={ todo }
                    markComplete={ markComplete }
                    deleteTodo={ deleteTodo }
                />
            ) :
            <div>todo list is empty</div>
        }
    </>
)

export default connect<MapStateToProps, {}, OwnProps, AppStateType>(
    ({ todo }) => ({ todos: todo.todos }),
    {})
(TodoList);