import React from 'react';
import TodoItem from './todo-item';

export default class TodoList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          id:1,
          text: "one"
        },
        {
          id:2,
          text: "two"
        },
        {
          id:3,
          text: "three"
        }
      ]
    };

    this.addItem = () => {
      console.log("hit!");

      this.state.todos.push({
        id: "#",
        text: "test text"
      })

      this.setState({
        todos: this.state.todos
      });
    };
  }

  render(){
    return(
      <div>
        {this.state.todos.map(function(todo, index){
          return <TodoItem id={todo.id} text={todo.text} key={index}/>;
        })}
        <button onClick={this.addItem}>Print</button>
      </div>
    )
  }
}
