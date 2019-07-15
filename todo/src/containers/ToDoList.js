import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

function ToDoList(props) {
    const {  task } = props
    return (
        <Container>
            <ListGroup>
                <ListGroupItem>

                </ListGroupItem>
                <ListGroupItem>
                    { task.map (( task, i) => {
                        return <ListGroupItem key={i}>{task}</ListGroupItem>
                    })}
                </ListGroupItem>
            </ListGroup>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        task: state.task,
        id: state.id
    }
}

export default connect(mapStateToProps)(ToDoList)




