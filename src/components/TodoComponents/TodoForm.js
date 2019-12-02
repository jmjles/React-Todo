import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }

    }
    handleChange=el=>{
        this.setState({
            value:el.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const parent = this.props.parent
        parent.setState(prevState => ({
            todos:[
                ...prevState.todos,this.state.value
            ]
        }))
        this.setState({
            value:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Enter a Todo' 
                        value={this.state.value}   
                        onChange={this.handleChange}
                        required/>
                        <input value='Add Todo' type='submit'/>
                </form>
            </div>
        )
    }
}

export default TodoForm
