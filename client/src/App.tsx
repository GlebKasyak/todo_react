import React, { Component } from "react";
import { TodoType } from "./shared/todoTypes";
import { todoAPI } from "./core";

import { Header, TodoList, AddTodo, Preloader } from "./components";

type StateType = {
    todos: Array<TodoType>,
    isLoading: boolean
}

class App extends Component<{}, StateType> {

  state = {
      todos: [],
      isLoading: false
  };

  async componentDidMount() {
    const response = await todoAPI.getAllTodos();
    const { success, todos } =  response.data;

    if(success) this.setState({ todos, isLoading: false });
  }

  addTodo = async ( title: string ) => {
    const data = {
      title,
      completed: false,
    };

    this.setState({ isLoading: true });

    const response = await todoAPI.addTodo(data);
    const { success, todo } = response.data;

    if(success) this.setState({ todos: [...this.state.todos, todo] });
    this.setState({ isLoading: false })

  };

  markComplete = async ( id: number ) => {
    const response = await todoAPI.changeTodoStatus(id);

    if(response.data.success) {
        this.setState({ todos: this.state.todos.map((todo: TodoType) =>
                todo._id === id ? { ...todo, completed: !todo.completed } : todo)
        })
    }
  };

  deleteTodo = async ( id: number ) => {
      this.setState({ isLoading: true });

      const response = await todoAPI.delTodo(id);
      if(response) {
          this.setState({
              todos: [...this.state.todos.filter( (todo: TodoType) => todo._id !== id )],
              isLoading: false
          });
      }
  };

  render() {
    const { todos, isLoading } = this.state;

    return (
        <div className="App">
          <Header />
          <div className="container">
          { isLoading && <Preloader /> }
          <AddTodo addTodo={ this.addTodo } />
          <TodoList
              todos={ todos }
              markComplete={ this.markComplete }
              deleteTodo={ this.deleteTodo }
          />
          </div>
        </div>
    )
  }
}

export default App;
