import React, { Component, ChangeEvent, FormEvent } from "react";
import "./style.scss";

type PropsType = {
  addTodo: (title: string) => void
}

type StateType = {
  title: string
}

class AddTodo extends Component<PropsType, StateType> {
  state = { title: "" };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value })
  };

  onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;

    return (
          <form onSubmit={ this.onSubmit } className="add-todo-form">
            <input
                value={ title }
                onChange={ this.onChange }
                type="text"
                placeholder="Add Todo..."
            />
            <button className="btn" disabled={!title}>Add Task</button>
          </form>
    )
  }
}

export default AddTodo;