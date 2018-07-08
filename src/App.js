import React from 'react';
import { TodoForm } from './components/TodoComponents/TodoForm';
import { TodoList } from './components/TodoComponents/TodoList';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    }
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, id: Date.now(), completed: false });
    this.setState({ todos, todo: "" })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm todo={ this.state.todo } inputHandler={ this.inputHandler } addTodo = { this.addTodo }/>
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
