import React from 'react'

import Todo from './Todo'

const TodoList = ({ taskList, toggleItem }) => {
    return (
        <div>
            {taskList.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={toggleItem}/>
            ))}
        </div>
    )
}

export default TodoList