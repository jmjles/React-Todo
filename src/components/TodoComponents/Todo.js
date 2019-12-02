import React from 'react'
import { Card,Typography as Font } from '@material-ui/core'

function Todo({todos}) {
    return (
        <Card>
            <Font>
                {todos}
            </Font>
            
        </Card>
            
    )
}

export default Todo
