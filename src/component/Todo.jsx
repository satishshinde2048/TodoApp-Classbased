import React from 'react';

 class Todo extends React.Component{

    onClick=()=>{
        this.props.onDelete(this.props.todo.id);
    }
    onChange=(event)=>{
        this.props.HandleDone(this.props.todo.id);
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <div className='col-md-1'>
                    {this.props.index}
                    </div>
                    <div className='col-md-1'>
                        <input type='checkbox' checked={this.props.todo.isDone} onChange={this.onChange}></input>
                    </div>
                    <div className='col-md-6' style={{textDecoration: this.props.todo.isDone ?"line-through" :""}}>
                     {this.props.todo.value}
                    </div>
                    <div className='col-md-4'>
                     <button className='btn btn-danger' onClick={this.onClick}>delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;