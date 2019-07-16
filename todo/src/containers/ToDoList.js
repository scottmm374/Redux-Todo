import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, ListGroupItem, CardBody } from 'reactstrap';


function ToDoList(props) {
    const { task } = props
    return (
        <Container className="list">
            <CardBody>
            <ListGroup>
                {/* <ListGroupItem>
                    Things To Do: {task}
                </ListGroupItem> */}
                <ListGroupItem>
                    {task.map((item, i) => {
                        return <ListGroupItem key={i}>{item}</ListGroupItem>
                    })}
                </ListGroupItem>
            </ListGroup>
            </CardBody>  
        </Container>
    )
}



const mapStateToProps = (state) => {
    console.log("list", state)
    return {
        task: state.task
    }
}

export default connect(mapStateToProps)(ToDoList)




