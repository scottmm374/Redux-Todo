import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem, CardBody } from 'reactstrap';


function ToDoList(props) {
    const { todo } = props
    return (
        <Container className="list">
            <CardBody>
                <ListGroupItem>
                    {todo.map((item, i) => {
                        return <ListGroupItem key={i}>{todo} </ListGroupItem>
                    })}
                </ListGroupItem>
            </CardBody>
        </Container>
    )
}



const mapStateToProps = (state) => {
    console.log("list", state)
    return {
        todo: state.task
    }
}

export default connect(mapStateToProps)(ToDoList)




