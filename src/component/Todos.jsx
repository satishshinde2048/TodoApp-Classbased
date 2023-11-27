import React from "react";
import Todo from './Todo';
import AddTodo from "./AddTodo";


export class Todos extends React.Component{
    state={
        todos:
        localStorage.getItem('todos')
        ?JSON.parse(localStorage.getItem('todos'))
        :[]
    }
    AddNewTodo=(todoValue)=>{
        if(todoValue){
        const todos=[...this.state.todos];
        todos.push({
            id:new Date().getTime(),
            value:todoValue,
            isDone:false,
        })
        this.setState({todos});
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    }

    onDelete=(todoId)=>{ 
    const todos=this.state.todos.filter((item)=>item.id!==todoId)
        this.setState({todos});
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    HandleDone=(todoId)=>{
      const todos=[...this.state.todos];
      todos.map((item)=>{
        if(item.id===todoId){
            item.isDone=!item.isDone;
        }
        return item;
      })
      this.setState({todos});
      localStorage.setItem('todos',JSON.stringify(todos));
    }

    render(){
        return(
        <div>
        {
        this.state.todos?.length===0
        ?<h1> Todos not present</h1>
    
        :this.state.todos.map((Item,index)=>{
          return <Todo key={index} index={index+1} todo={Item} onDelete={this.onDelete} HandleDone={this.HandleDone}></Todo>
        })
        }
        <AddTodo addtodo={this.AddNewTodo}></AddTodo>
        </div>
        );
    }
}