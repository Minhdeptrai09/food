import React from "react";

class AddTodo extends React.Component{
    state={
            title: ''
        }

    handlOnChange=(event) => {
        this.setState({
            title: event.target.value
        })
    }

    handlOnClick = () =>{
        var today = new Date();
        var time = today.getDate() + '-' +(today.getMonth()+1)+'-'+today.getFullYear();
        let todo = {
            id: Math.floor(Math.random() * 1001),
            date: time,
            title: this.state.title
        }

        this.props.AddNewTodo(todo);
        this.setState({
            title:''
        })
    }

    render(){
        
    let {title} = this.state;
    return(
        
        <div className="AddTodo">
            <label>Todo: </label>
            <input type="text" value={title} 
            onChange = {(event) => this.handlOnChange(event)}
            ></input> 
            <button type="button" 
                onClick={() => this.handlOnClick()}
            >Add</button>
        </div>
    )
    }
    
}

export default AddTodo