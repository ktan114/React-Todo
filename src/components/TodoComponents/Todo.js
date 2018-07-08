import React from 'react';

export const Todo = props => {
    return (
        <div>
            <div> { props.todo.task } </div>
        </div>
    )
}