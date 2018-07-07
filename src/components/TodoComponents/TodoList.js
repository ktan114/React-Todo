import React from 'react';

export const TodoList = props => {
    return (
        <div>
            { props.todoArray.map((element, index) => {
                return <div key={ index }> <Todo toDo = { element } /> </div>
            })}
        </div>
    )
}
