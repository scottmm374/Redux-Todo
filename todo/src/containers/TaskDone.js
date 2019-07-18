import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { toggleTask } from '../Actions';
import { connect } from 'react-redux'


const style = { textDecoration: 'line-through' };
const TaskDone = props => {
    return (
        <div>
            {props.task.map(todo => (
                <ListGroupItem
                    style={todo.completed ? style : null}
                    onClick={() => props.toggleTask(todo.id)}
                    key={todo.id}
                >
                    {todo.task}
                </ListGroupItem>
            ))}
        </div>
    );
};

export default connect(null, { toggleTask })(TaskDone);
