import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

function ToDoList(props) {
    const { task } = props
    return (
        <Container>
            <ListGroup>
                <ListGroupItem>
                    ${ task }

                </ListGroupItem>
                <ListGroupItem>
                    { task.map (( todo, i) => {
                        return <ListGroupItem key={i}>{todo}</ListGroupItem>
                    })}
                </ListGroupItem>
            </ListGroup>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        task: state.task,
    }
}

export default connect(mapStateToProps)(ToDoList)




