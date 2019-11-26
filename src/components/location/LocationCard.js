import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (<>
      <div className="card">
        <div className="card-content">
          <h2>Name: <span className="location-name">{this.props.actualLocation.name}</span></h2>

          <Link to={`/locations/${this.props.actualLocation.id}`}><button>Details</button></Link>
          {this.props.user && <><button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.actualLocation.id}/edit`) }}>Edit</button>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.actualLocation.id)}>Close</button>
          </>}
        </div>
      </div>
    </>
    );
  }
}

export default LocationCard;