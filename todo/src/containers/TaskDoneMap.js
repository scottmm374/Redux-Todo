import React from 'react'
import TaskDone from './TaskDone'
import { ListGroup, ListGroupItem } from 'reactstrap'


const TaskDoneMap = ({ task, toggleTask }) => (
    < ListGroup >
    {task.map(item =>
            <TaskDone key={item.id} {...item} onClick={() => toggleTask(item.id)} />
        )}
        </ListGroup>

        )

        export default TaskDoneMap;