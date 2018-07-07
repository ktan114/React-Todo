import React, { Components } from 'react';
import Todo from './Todo';

class TodoList extends Components {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newTodo: "",
        }
    }

    // addTodo = (event) => {
    //     const list = this.state.list;
    //     const newTodo = this.state.newTodo;
    //     list.push(newTodo);
    //     this.setState({list: list, newTodo: ''});
    // }

    render() {
        return (
            <div>
            <h1>Hi</h1>
               {console.log("hi")}
            </div>
        );
    }
}

export default TodoList;