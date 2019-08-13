import React from 'react'

const Todo = ({ task, dispatch }) => {
    return (
        <div>
            <p
                className={!task.completed ? '' : 'todo-complete'}
                onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: task.id })}
            >
                {task.item}
            </p>
        </div>
    )
}

export default Todo