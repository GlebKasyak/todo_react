import React, { Component } from "react";
import { connect } from "react-redux";

import { Header, TodoList, AddTodo, Preloader } from "./components";

import { TodoType } from "./shared/todoTypes";
import { getAllTodos, addTodo, changeTodoStatus, delTodo } from "./store/actions/todo.action";
import { AppStateType } from "./store/reducers";

type PropsType = {
    getAllTodos: () => void
    addTodo: (data: TodoType) => void
    changeTodoStatus: (id: string) => void
    delTodo: (id: string) => void
}

type StateType = {
    isLoading: boolean
}

class App extends Component<PropsType, StateType> {
  state = { isLoading: false };

  async componentDidMount() {
    await this.props.getAllTodos();
    this.setState({ isLoading: false });
  }

  addTodo = async ( title: string ) => {
    const data = { title, completed: false };
    this.setState({ isLoading: true });

    await this.props.addTodo(data);
    this.setState({ isLoading: false })
  };

  markComplete = async ( id: string ) => await this.props.changeTodoStatus(id);

  deleteTodo = async ( id: string ) => {
      this.setState({ isLoading: true });
      await this.props.delTodo(id);

      this.setState({ isLoading: false });
  };

  render() {
    return (
        <div className="App">
          <Header />
          <div className="container">

          { this.state.isLoading && <Preloader /> }

          <AddTodo addTodo={ this.addTodo } />
          <TodoList
              markComplete={ this.markComplete }
              deleteTodo={ this.deleteTodo }
          />
          </div>
        </div>
    )
  }
}

export default connect<{}, PropsType, {}, AppStateType>(
    null,
    { getAllTodos, addTodo, changeTodoStatus, delTodo })
(App);
