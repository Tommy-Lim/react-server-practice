import React from 'react';

export default class Movie extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <h2>({this.props.movie.Year}) - {this.props.movie.Title}</h2>
        <img src={this.props.movie.Poster}/>
      </div>
    )
  }
}
