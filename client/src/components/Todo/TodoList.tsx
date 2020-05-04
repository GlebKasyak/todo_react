import React from "react";
import { TodoType } from "../../shared/todoTypes";

import TodoItem from "./TodoItem/TodoItem";

type Props = {
  todos: Array<TodoType>,
  markComplete: (id: number) => void,
  deleteTodo: (id: number) => void
}

export default ({ todos, markComplete, deleteTodo }: Props) => (
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