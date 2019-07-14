import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '..Actions';
import { Form, Button, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

class AddTask extends React.Component {
    constructor() {
        super()
        this.state = {
            task: []
        }
    }
}

handleChange = (e) => {
    e.preventDefault()
    this.setState({
        [e.target.name]: e.target.value,
    })
}

newTask = (e) => {
    e.preventDefault()

    const { task } = this.state
    this.props.addTodo(task)

    //reset form after submit

    this.setStae({
        task: ''
    })
}

render() {
    return (
        <Container>
            <Form>
                <Label>Add Task</Label>
                <Input type='text' name='task' placeholder='Add task' />
            </Form>
        </Container>

    )
}