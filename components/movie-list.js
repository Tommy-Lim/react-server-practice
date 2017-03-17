import React from 'react';
import axios from 'axios';
import Movie from './movie.js'

export default class MovieList extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      movies: [],
      query: ''
    }


    this.changeQuery = (e) => {
      var query = e.target.value;
      this.setState({
        query: query
      })
    }

    this.searchMovies = (e) => {
      var thisScope = this;
      e.preventDefault();
      console.log("searching movies for", thisScope.state.query);
      axios.get('http://www.omdbapi.com/', {
          params: {
            s: thisScope.state.query
          }
        })
        .then(function(response){
          var movies = response.data.Search
          console.log("MOVIES", movies);
          thisScope.setState({
            movies: movies
          })
        })
        .catch(function(error){
          console.log("ERR", error);
        })
    }

  }

  render(){
    if(this.state.movies.length>0){
      return(
        <div>
          <form onSubmit={this.searchMovies}>
            <input
              type="text"
              value={this.state.query}
              onChange={this.changeQuery}
            />
          </form>
          <div>
            {this.state.movies.map(function(movie, index){
              return <Movie movie={movie} key={index}></Movie>
            })}
          </div>
        </div>
      )
    } else{
      return (
        <div>
          <form onSubmit={this.searchMovies}>
            <input
              type="text"
              value={this.state.query}
              onChange={this.changeQuery}
            />
          </form>
          <div>No movies</div>
        </div>
      )
    }
  }

}
