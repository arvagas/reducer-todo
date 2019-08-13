import React from 'react'
import moment from 'moment'

import Todo from './Todo'

const TodoList = ({ taskList, toggleItem }) => {
    const currentDate = moment()
    
    return (
        <div>
            {taskList.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={toggleItem} currentDate={currentDate}/>
            ))}
        </div>
    )
}

export default TodoList