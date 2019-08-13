import React from 'react'

const Todo = ({ task, dispatch }) => {
    return (
        <div>
            <p>{task.item}</p>
        </div>
    )
}

export default Todo