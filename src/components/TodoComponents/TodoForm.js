import React from 'react';

export const TodoForm = (props) => {
    return (
        <div>
            <input 
                type="text"
                placeholder="What Is Your Task?"
                name="task"
                value={props.task}
                onChange={props.inputHandler}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    )
}