import React from 'react';

export const Todo = props => {
    return (
        <div 
            style = { props.todo.completed ? { textDecoration: "line-through" } : null }
            onClick = {() => { props.completeTodo(props.todo.id) }}
        >
            { props.todo.task } 
        </div>
    )
}