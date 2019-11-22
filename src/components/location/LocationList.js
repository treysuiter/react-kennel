import React, { Component } from 'react'
//import the components we will need
// import EmployeeCard from './EmployeeCard'
// import EmployeeManager from '../../modules/APIManager'
import LocationCard from './LocationCard';
import APIManager from '../../modules/APIManager';

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: [],
  }

  componentDidMount() {
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from AnimalManager (APIManager if you're nasty) and hang on to that data; put it in state
    APIManager.getAll("locations")
      .then((locationArray) => {
        this.setState({
          locations: locationArray
        })
      })
  }

  deleteLocation = id => {
    APIManager.delete("locations", id)
      .then(() => {
        APIManager.getAll("locations")
          .then((newLocations) => {
            this.setState({
              locations: newLocations
            })
          })
      })
  }

  render() {
    console.log("Location List: Render");

    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/locations/new") }}>
            New Location
          </button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard key={location.id}
              location={location}
              deleteLocation={this.deleteLocation} />
          )}
        </div>
      </>
    )
  }
}

export default LocationList