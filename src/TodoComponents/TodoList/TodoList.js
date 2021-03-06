import React from 'react';

import { Todo } from '../Todo/Todo';

export const TodoList = props => {
    return (
        <div>
            { props.todos.map((element, index) => {
                return <div key={ index }> <Todo todo = { element } completeTodo = { props.completeTodo } /> </div>
            })}
        </div>
    )
}
