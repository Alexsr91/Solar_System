import axios from 'axios';
import React, { Component } from 'react';

class Planet extends Component {

  state = {
    local: [],
    external: [],
    isPlanet: true
  }


  gettingPlanet = () => {
    axios.get(`/planet/${this.props.key}`)
      .then(() => {
        this.setState({
          local: this.local,
          external: response.data,
          isPlanet: this.isPlanet
        });
      }).catch(error => console.log(error))
  }



  render() {

    return (
      <div></div>
    )
  }

}

export default Planet;

