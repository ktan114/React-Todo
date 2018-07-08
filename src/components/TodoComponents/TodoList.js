import React from 'react';
import { Todo } from './Todo';

export const TodoList = props => {
    return (
        <div>
            { props.todos.map((element, index) => {
                return <div key={ index }> <Todo todo = { element } /> </div>
            })}
        </div>
    )
}
