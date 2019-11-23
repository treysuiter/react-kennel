import React, { Component } from 'react'
import APIManager from '../../modules/APIManager';
import OwnerCard from './OwnerCard';

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: [],
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("owners")
      .then((ownerArray) => {
        this.setState({
          owners: ownerArray
        })
      })
  }

  deleteOwner = id => {
    APIManager.delete("owners", id)
      .then(() => {
        APIManager.getAll("owners")
          .then((newOwners) => {
            this.setState({
              owners: newOwners
            })
          })
      })
  }

  render() {

    return (
      <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { this.props.history.push("/owners/new") }}>
          Add Owner
      </button>
      </section>
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard key={owner.id}
            owner={owner}
            deleteOwner={this.deleteOwner} />
        )}
      </div>
      </>
    )
  }
}

export default OwnerList