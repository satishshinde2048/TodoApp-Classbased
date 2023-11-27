
import React from 'react';
import './App.css';
import {Todos} from './component/Todos';

export class App extends React.Component{
  render(){
  return (
    <div className="App">
    <Todos></Todos>
      </div>
  );
}
}


