import React from 'react'
import Todo from './Todo'
import { Container } from '@material-ui/core'

function TodoList({parent}){
    return(
        <Container>
            <Todo parent={parent}/>
        </Container>
    )
}

export default TodoList
