import React from 'react'

const Todo = ({ task, toggleItem, currentDate }) => {
    const taskDate = new Date(task.deadline) // Convert deadline to Date to allow for comparison

    return (
        <div>
            <p
                className={!task.completed ? '' : 'todo-complete'}
                onClick={() => toggleItem(task)}
            >
                {task.item} {(!task.completed && (taskDate <= currentDate)) ? <span>- OVERDUE!</span> : ''}
            </p>
            <p>Deadline: {task.deadline}</p>
        </div>
    )
}

export default Todo