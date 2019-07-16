import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

const TaskDone = ({ onClick, completed, task}) => (
    
        <ListGroupItem onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none'}}>
            {task}
            
        </ListGroupItem>
   )

   export default TaskDone;