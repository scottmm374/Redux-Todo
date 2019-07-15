import React from 'react';
import AddTask from './containers/AddTask'
import ToDoList from './containers/ToDoList'
import { Container } from 'reactstrap'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
         
            <ToDoList />
            <AddTask />
          
        </Container>


      </div >
    )
  }
}
export default App;


