import React, { Component } from 'react'
import { Container,Input,Button } from '@material-ui/core';
const id = require('uniqid');
class TodoForm extends Component {
    state={
            value:''
    }
    handleChange= el =>{
        this.setState({
            value:el.target.value
        })
    }
    handleSubmit= e =>{
        e.preventDefault();
        const parent = this.props.parent
        parent.setState(prevState => ({
            todos:[...prevState.todos,
                {
                task:this.state.value,
                status: 'incomplete',
                id:id()
            }]
        }))
        this.setState({
            value:''
        })
    }
    render() {
        return (
            <Container align='center'>
                <form onSubmit={this.handleSubmit}>
                    <Input placeholder='Enter a Todo' 
                        value={this.state.value}   
                        onChange={this.handleChange}
                        required
                        autoFocus
                        />
                        <Button type='submit' variant='outlined'>Add Todo</Button>
                </form>
            </Container>
        )
    }
}

export default TodoForm
