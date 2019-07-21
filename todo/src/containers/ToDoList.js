import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroupItem, CardBody } from 'reactstrap';
import { toggleTask } from '../Actions/index';


function ToDoList(props) {
    const style = { textDecoration: 'line-through' };
    const { todo } = props
    return (
        <Container className="list">
            <CardBody>
                <span>
                    {todo.map((item, i) => {
                        return <ListGroupItem key={i} onClick={() => props.toggleTask(item.id)}
                         style={item.completed ? style : null}>{item.task} </ListGroupItem>
                    })}
                </span>
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

export default connect(mapStateToProps, {toggleTask})(ToDoList)




