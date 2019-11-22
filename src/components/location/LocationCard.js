import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    console.log("what up here", this.props)
    return (<>
      <div className="card">
        <div className="card-content">
          <h2>Name: <span className="location-name">{this.props.location.name}</span></h2>
          <address>Address: {this.props.location.address}</address>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.location.id}/edit`) }}>Edit</button>
        </div>
      </div>
      </>
    );
  }
}

export default LocationCard;