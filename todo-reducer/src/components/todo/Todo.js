import React from 'react'
import moment from 'moment'

const Todo = ({ task, toggleItem, currentDate }) => {
    return (
        <div>
            <p
                className={!task.completed ? '' : 'todo-complete'}
                onClick={() => toggleItem(task)}
            >
                {task.item} {(!task.completed && (moment(task.deadline) <= currentDate)) ? <span>- OVERDUE!</span> : ''}
            </p>
            <p>Deadline: {moment(task.deadline).format('MMMM D, YYYY')}</p>
            <p>Completed: {task.completedDate}</p>
        </div>
    )
}

export default Todo