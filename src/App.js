import React from 'react';
import { TodoForm } from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: Date.now(),
      completed: false,
    }
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm task={ this.state.task } inputHandler={ this.inputHandler } />
      </div>
    );
  }
}

export default App;
