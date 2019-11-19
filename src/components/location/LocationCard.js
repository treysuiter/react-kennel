import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="location-name">{this.props.location.name}</span></h2>
            <address>Address: {this.props.location.address}</address>
          </div>
      </div>
    );
  }
}

export default LocationCard;