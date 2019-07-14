import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '..Actions';

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
    this.setState ({
        [e.target.name]: e.target.value,
    })
}

newTask = (e) => {
    e.preventDefault()

    const { task } = this.state
    this.props.addTodo(task)

    //reset form after submit

    this.setStae ({
        task: ''
    })
}

render() {
    return (

    )
}