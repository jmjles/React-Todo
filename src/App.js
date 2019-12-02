import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import {Container} from '@material-ui/core'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state={
    todos:[]
  }
  render() {
    return (
      <Container>
        <TodoList todos={this.state.todos}/>
        <TodoForm parent={this}/>
      </Container>
    );
  }
}

export default App;
