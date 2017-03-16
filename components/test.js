import React from 'react';
// import {logging} from 'react-server';

// const logger = logging.getLogger(__LOGGER__);

export default class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: "Hello Test"
    }

  }

  render(){
    return(
      <div>
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}
