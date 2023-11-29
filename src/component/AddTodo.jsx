//Add Todo component:

import React from "react";

 class AddTodo extends React.Component{
    state={
        value:''
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.addtodo(this.state.value);
        this.setState({value:''})
    }

    onChange=(event)=>{
     this.setState({value:event.target.value})
    }

    render(){
        return(
           <div className="container">
            <form onSubmit={this.onSubmit}>
            <div className="mb-3">
             <input type="text" id="input" className="form-control" value={this.state.value} onChange={this.onChange}></input>
            </div>
            <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
           </div>
        )
    }
}

export default AddTodo;