import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
  } 

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get("locations", this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;