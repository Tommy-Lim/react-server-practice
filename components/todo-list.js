import React from 'react';
import TodoItem from './todo-item';

export default class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <TodoItem/>
      </div>
    )
  }
}
