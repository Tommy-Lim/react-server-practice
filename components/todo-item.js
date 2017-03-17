import React from 'react';

export default class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <h2>{this.props.id}: {this.props.text}</h2>
      </div>
    )
  }
}
