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
      ],
      newItem: '',
    };

    this.addItem = (e) => {
      e.preventDefault();
      var todos = this.state.todos
      todos.push({
        id: this.state.todos.length + 1,
        text: this.state.newItem
      })

      this.setState({
        todos: todos,
        newItem: '',
      });

    };

    this.editNewItem = (e) => {
      this.setState({
        newItem: e.target.value
      })
    }

    this.clearItems = () => {
      this.setState({
        todos: []
      })
    }
  }

  render(){
    return(
      <div>
        {this.state.todos.map(function(todo, index){
          return <TodoItem id={todo.id} text={todo.text} key={index}/>;
        })}

        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="text here"
            onChange={this.editNewItem}
            value={this.state.newItem}
            />
        </form>

        <button onClick={this.clearItems}>Clear</button>
      </div>
    )
  }
}
