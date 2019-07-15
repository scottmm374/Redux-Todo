import React from 'react';
import { connect } from 'react-redux';
import  { addTodo }  from '../src/Actions/index';
import { Form, Button, FormGroup, Label, Input, Container } from 'reactstrap';

class AddTask extends React.Component {
    constructor() {
        super()
        this.state = {
            task: []
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

        this.setState({
            task: ''
        })
    }



render() {
    const { task } = this.state
    return (
        <Container>
            <Form onSubmit={this.newTask}>
                <Label>Add Task</Label>
                <FormGroup>
                    <Input type='text' name='task' placeholder='Add task' value={task} onChange={this.handleChange} />
                </FormGroup>
                <Button>Add Task</Button>

            </Form>
        </Container>

    )
}
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


const mapDispatchToProps = {
    addTodo: addTodo
}
export default connect(mapStateToProps, mapDispatchToProps, {addTodo})(AddTask);