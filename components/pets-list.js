import React from 'react';
import PetItem from './pet-item';
import axios from 'axios';

export default class PetsList extends React.Component{
  constructor(props){
    super(props);

    var key="496f545b56c383d262c9445baca74e87";

    this.state = {
      pets: [],
      query: '',
      petsSearched: false
    }

    this.changeQuery = (e) => {
      console.log(e.target.value);
      this.setState({
        query: e.target.value
      })
    }

    this.findPets = (e) => {
      e.preventDefault();
      axios.get('http://api.petfinder.com/pet.getRandom/', {
        params: {
          key: key,
        },
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error)
      })
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
