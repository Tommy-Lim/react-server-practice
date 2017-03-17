import React from 'react';
import PetItem from './pet-item';
import axios from 'axios';
require('dotenv').config();

export default class PetsList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pets: [],
      query: '',
      petsSearched: false
    }

    this.changeQuery = (e) => {
      console.log(e.target.value);
      console.log(process.env.REACT_APP_PET_API_KEY);
      this.setState({
        query: e.target.value
      })
    }

    this.findPets = () => {
      axios.get('')
    }
  }

  render(){
    if(this.state.pets.length>0){
      return(
        <div>
          <p>{process.env.REACT_APP_PET_API_KEY}</p>
          <p>{process.env.NODE_ENV}</p>
          <form onSubmit={this.findPets}>
            <input type="text"
                onChange={this.changeQuery}
                value={this.state.query}
                />
          </form>
          {this.state.pets.map(function(pet){
            <PetItem pet={pet} key={index}/>
          })}
        </div>
      )
    } else if(!this.state.petsSearched){
      return(
        <div>
          <p>{process.env.REACT_APP_PET_API_KEY}</p>
          <p>{process.env.NODE_ENV}</p>
          <form onSubmit={this.findPets}>
            <input type="text"
                onChange={this.changeQuery}
                value={this.state.query}
                />
          </form>
          <div>Search for pets</div>
        </div>
      )
    } else{
      return(
        <div>
          <p>{process.env.REACT_APP_PET_API_KEY}</p>
          <p>{process.env.NODE_ENV}</p>
          <form onSubmit={this.findPets}>
            <input type="text"
                onChange={this.changeQuery}
                value={this.state.query}
                />
          </form>
          <div>No pets found</div>
        </div>
      )
    }

  }
}
