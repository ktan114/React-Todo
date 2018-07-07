import React from 'react';
<<<<<<< HEAD
import { TodoForm } from './components/TodoComponents/TodoForm';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
=======
import TodoList from './components/Todo';

<<<<<<< HEAD
const App = () => (
  <div>
    <h2>Todo App</h2>
    <TodoList />
  </div>
);
=======
>>>>>>> 860656c2e819df4006cfe38b2bef187633990076
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
>>>>>>> 06c8f67ffe391c22c437ca8f4cc16a67b5aab9fd

export default App;
