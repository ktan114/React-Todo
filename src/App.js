import React from 'react';

import { TodoForm } from './TodoComponents/TodoForm/TodoForm';
import { TodoList } from './TodoComponents/TodoList/TodoList';
import "./App.css";

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
    const todos = [].concat(this.state.todos);
    todos.push({ task: this.state.todo, id: Date.now(), completed: false });
    this.setState({ todos, todo: "" })
  }

  completedTodo = id => {
    const todos = [].concat(this.state.todos);
    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({ todos })
  }

  completeHandler = event => {
    event.preventDefault();
    let todos = [].concat(this.state.todos);
    todos = todos.filter(item => {
      return !item.completed;
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <h2 className="App__h2">Todo List</h2>
        <TodoForm 
          todo={ this.state.todo } 
          inputHandler={ this.inputHandler } 
          addTodo = { this.addTodo } 
          clearTodo = { this.completeHandler } 
        />
        <div className="App__List">
          <TodoList 
            todos={ this.state.todos } 
            completeTodo={ this.completedTodo } 
          />
        </div>
      </div>
    );
  }
}

export default App;
