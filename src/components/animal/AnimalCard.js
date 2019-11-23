import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from "../../modules/Helpers"

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={`https://robohash.org/${this.props.animal.name}`} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h2>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;