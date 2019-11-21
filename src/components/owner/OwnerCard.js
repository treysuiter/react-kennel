import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="owner-name">{this.props.owner.name}</span></h2>
            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>

          </div>
      </div>
    );
  }
}

export default OwnerCard;