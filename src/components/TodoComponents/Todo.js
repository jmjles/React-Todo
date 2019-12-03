import React from 'react'
import { Card,Typography as Font,Grid, Fab } from '@material-ui/core'
import {Remove,Done} from '@material-ui/icons'
import {makeStyles} from '@material-ui/styles'

function Todo({parent}) {
    const styles = makeStyles({
        todoCard:{
            width: 300,
            height: 300,
            marginTop:30,
            position:'relative'
        },
        completed:{
            backgroundColor:'green'
        },
        bottomCard:{
            position:"absolute",
            bottom:30,
            width:'100%'
        },
        rightCard:{
            left:'120px'
        },
        padding:{
            padding:30
        },
    })
    const classes = styles();
    const markDone = e => {
        parent.setState(prevState => {
            prevState.todos.map(todo => {
                if(todo.id === e) todo.status = 'complete'
                return todo
            })
        })
        alert('Checked!')
    }
    const deleteMe = e => {
        parent.setState({
            todos: parent.state.todos.filter(todo => todo.id !== e)
        }
        )
    }
    return (
        <Grid container justify='space-around'>
            {
                parent.state.todos.map(todo => (
                    <Grid item key={todo.id}>
                        <Card elevation={4} className={classes.todoCard}>
                            <div className={classes.padding}>
                                <Font align='center'>
                                {todo.task}
                            </Font>
                            <div className={classes.bottomCard}>
                                <Fab color='primary' onClick={()=>markDone(todo.id)}>
                                    <Done/>
                                </Fab>
                                <Fab color='secondary' className={classes.rightCard} onClick={()=>deleteMe(todo.id)}>
                                    <Remove/>
                                </Fab>
                            </div>
                            
                            </div>
                        </Card>
                    </Grid>
                )) 
            }
        </Grid>
    )
}

export default Todo
