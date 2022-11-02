import React from 'react';
import '../style/ListTodo.css';
import AddTodo from '../contexts/AddTodo';

class ListTodo extends React.Component{
    state ={
        listTodo: [
            {id: 'todo1',date: '29-10-2022', title: 'play'},
            {id: 'todo2',date: '29-10-2022', title: 'play_Game'},
            {id: 'todo3',date: '29-10-2022', title: 'sleep'},
        ],
        editTodo: [],

        DoneTodo:[
            {id: 'todo1',date: '29-10-2022', title: 'play'},
            {id: 'todo2',date: '29-10-2022', title: 'play_Game'},
            {id: 'todo3',date: '29-10-2022', title: 'sleep'},
        ]
    }

    AddNewTodo = (todo)=>{
        // let currentListTodo = this.State.listTodo;
        // currentListTodo.push(todo);
        this.setState({
            listTodo: [...this.state.listTodo, todo],
        //    listTodo: currentListTodo
        })
    }

    HandlDeleteTodo = (todo) =>{
        let currentListTodo = this.state.listTodo;
        currentListTodo = currentListTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentListTodo
        })
    }

    handlEditTodo = (todo) =>{
        let {editTodo, listTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    hanldOnChageEditTodo = (event) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy 
        })
    }

    HandlDoneTodo = () =>{
    }
    render(){
        let {listTodo, editTodo} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> call state: ', isEmptyObj);
        return(
            <div className='list_todo'>
                <div className='list_todo_create'>
                    <h2>CREATE NEW TODO</h2>

                    <AddTodo
                    AddNewTodo={this.AddNewTodo}
                    />
                </div>
                
                <div className='list_todo_contenrt'>
                    <h2>LIST TODO</h2>
                    {listTodo && listTodo.length > 0 && 
                        listTodo.map((item) => {
                            return(
                                <div className="todo-child" key={item.id.toString()}>
                                    <div>
                                        {isEmptyObj === true ?
                                            <span> {item.date} - {item.title} </span>
                                            :
                                            <>
                                            {editTodo.id === item.id ?
                                                <span> 
                                                    {item.date} - <input 
                                                    value={editTodo.title} 
                                                    onChange = {(event) => this.hanldOnChageEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {item.date} - {item.title}
                                                </span>
                                            }
                                            </>
                                            
                                        }
                                    </div>
                                    <div className='btn_contener'>
                                        <button className="Edit"
                                            onClick={()=>this.handlEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="Delete"
                                            onClick={() => this.HandlDeleteTodo(item)}

                                        >Delete</button> 
                                        <button className='Done' 
                                        onClick={() => this.HandlDoneTodo(item)}
                                        >Done </button>  
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;