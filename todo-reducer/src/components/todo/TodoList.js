import React from 'react'

import Todo from './Todo'

const TodoList = ({ taskList, dispatch }) => {
    return (
        <div>
            {taskList.tasks.map(task => (
                <Todo key={task.id} task={task} dispatch={dispatch}/>
            ))}
        </div>
    )
}

export default TodoList