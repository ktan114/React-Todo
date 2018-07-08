import React from 'react';
import './Todo.css';

export const Todo = props => {
    return (
        <div 
            style={ props.todo.completed ? { textDecoration: "line-through" } : null }
            onClick={() => { props.completeTodo(props.todo.id) }}
            className="Task"
        >
            { props.todo.task } 
        </div>
    )
}