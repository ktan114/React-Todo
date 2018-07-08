import React from 'react';

export const TodoForm = (props) => {
    return (
        <div>
            <input 
                type="text"
                placeholder="What Is Your Task?"
                name="todo"
                value={props.todo}
                onChange={props.inputHandler}
            />
            <button onClick = {props.addTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}