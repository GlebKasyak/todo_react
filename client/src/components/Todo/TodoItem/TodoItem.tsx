import React from "react";
import cn from "classnames";
import "./style.scss";

import { TodoType } from "../../../shared/todoTypes";

type Props = {
    todo: TodoType,
    markComplete: (id: number) => void,
    deleteTodo: (id: number) => void
}

export default ({ todo, markComplete, deleteTodo }: Props) => {

  return (
      <div  className={cn("todo-item", {"todo-item--completed": todo.completed})} >
          <p>
              <label>
                  <input
                      type="checkbox"
                      onChange={ markComplete.bind(null, todo._id!) }
                      className="btn-check"
                      checked={todo.completed}
                  />
                  <span />
              </label>
              { todo.title }
              <button onClick={ deleteTodo.bind(null, todo._id!) } className="delete">x</button>
          </p>
      </div>
  )
}