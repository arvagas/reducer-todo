import React from 'react'
import moment from 'moment'

import { List } from 'semantic-ui-react'

const Todo = ({ task, toggleItem, currentDate }) => {
    return (
        <List.Item>
            <List.Content>
                <List.Header
                    className={!task.completed ? '' : 'todo-complete'}
                    onClick={() => toggleItem(task)}
                >
                    {task.item} {(!task.completed && (moment(task.deadline) <= currentDate)) ? <span className='overdue'>- OVERDUE!</span> : ''}
                </List.Header>
                <List.Description>Deadline: {moment(task.deadline).format('MMMM D, YYYY')}</List.Description>
                <List.Description>
                    Completed: {task.completedDate !== '' ? moment(task.completedDate).format('MMMM D, YYYY') : ''}
                </List.Description>
            </List.Content>
        </List.Item>
    )
}

export default Todo