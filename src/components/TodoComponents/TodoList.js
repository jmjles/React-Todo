import React from 'react'
import Todo from './Todo'
import { Container } from '@material-ui/core'

function TodoList({todos}){
    return(
        <Container>
            <Todo todos={todos}/>
        </Container>
    )
}

export default TodoList
