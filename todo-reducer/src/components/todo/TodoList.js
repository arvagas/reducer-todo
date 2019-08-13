import React from 'react'

import Todo from './Todo'

const TodoList = ({ taskList, toggleItem }) => {
    let d = new Date()
    const currentDate = new Date(d.getFullYear(),d.getMonth(),d.getDate()) // Zeros out time

    return (
        <div>
            {taskList.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={toggleItem} currentDate={currentDate}/>
            ))}
        </div>
    )
}

export default TodoList