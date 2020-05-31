import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { Header, TodoList, AddTodo, Preloader } from "./components";

import { TodoType } from "./shared/todoTypes";
import { TodoSelectors } from "./store/selectors";
import { todosActions } from "./store/actions/todo.action";
import { AppStateType } from "./store/reducers";

type MapStateToProps = {
    isLoading: boolean,
    error: boolean
};

type MapDispatchToProps = {
    getAllTodosRequestAC: () => void,
    addTodoRequestAC: (payload: TodoType) => void,
    changeTodoStatusRequestAC: (payload: string) => void,
    delTodoRequestAC: (payload: string) => void,
}

type Props = MapStateToProps & MapDispatchToProps;


class App extends Component<Props, {}> {
    componentDidMount() {
      this.props.getAllTodosRequestAC();
    }

    addTodo = ( title: string ) => {
        const data = { title, completed: false };

        this.props.addTodoRequestAC(data);
    };

  markComplete = (id: string) => this.props.changeTodoStatusRequestAC(id);

  deleteTodo = (id: string) => this.props.delTodoRequestAC(id);

  render() {
    const { error, isLoading } = this.props;

    if(error) {
      return <div style={{ color: "white", background: "red" }} >Error!!</div>
    }

    return (
        <div className="App">
          <Header />
          <div className="container">

          { isLoading && <Preloader /> }

          <AddTodo addTodo={ this.addTodo } />
          <TodoList
              markComplete={ this.markComplete }
              deleteTodo={ this.deleteTodo }
          />
          </div>
        </div>
    )
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(todosActions, dispatch)

const mapStateToProps = (state: AppStateType) => ({
    isLoading: TodoSelectors.getIsLoading(state),
    error: TodoSelectors.getError(state)
});

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps)
(App);
