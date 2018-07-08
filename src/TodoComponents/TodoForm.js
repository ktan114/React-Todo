import React from 'react';
import './TodoForm.css'

export const TodoForm = (props) => {
    return (
        <div className="TodoForm">
            <input 
                type="text"
                placeholder="What Is Your Task?"
                name="todo"
                value={props.todo}
                onChange={props.inputHandler}
            />
            <button onClick = { props.addTodo }>Add Todo</button>
            <button onClick = { props.clearTodo }>Clear Completed</button>
        </div>
    )
}