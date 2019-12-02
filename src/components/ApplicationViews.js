import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from "./owner/OwnerForm"
import Login from "./Auth/Login"
import AnimalEditForm from "./animal/animalEditForm"
import LocationEditForm from './location/LocationEditForm'
import EmployeeEditForm from './employee/employeeEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import SearchResults from './search/SearchResults'

class ApplicationViews extends Component {

  //Renders ApplicationsViews based on URL

  render() {

    return (
      <>
        {/* //! Login */}
        {/* Route path for login; calls Login components; passes setUser and ...props */}
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        {/* //! Home */}
        {/* Route path for home; calls Home component  */}
        <Route exact path="/" render={(props) => {       
          return <Home />
        }} />


        {/* //! Animals */}
        {/* Route path for animals (robots); checks for this.props.user and returns AnimalList component with ...props passed*/}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* Route path for animal detail; returns AnimalDetail component with animalId and ...props passed */}
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props} />
        }} />
        {/* Route path for new animal form; returns AnimalForm component with ...props passed */}
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/* Route path for animal edit form; returns AnimalEditForm with ...props passed */}
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        {/* //! Locations */}
        {/* Route path for locations list; return LocationList component with ...props passed */}
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        {/* Route path for location detail; returns LocationDetail component with locationId and ...props passed */}
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }} />
        {/* Route path for new location form; return LocationForm with ...props passed */}
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        {/* Route for location edit form; returns LocationEditForm with ...props passed */}
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />

        {/* //! Employees */}
        {/* Route path for employees list; return EmployeeList component with ...props passed if user is logged in */}
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* Route path for new employee form; return EmployeeForm component with ...props passed */}
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        {/* Route path for edit employee form; returns EmployeeEditForm component with ...props passed */}
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        {/* Route path for employee details; returns EmployeeWithAnimals component with ...props passed */}
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />

        {/* //! Owners */}
        {/* Route path for owners list; returns OwnerList with ...props passed if user is logged in */}
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* Route path for new owner form; returns OwnerForm with ...props passed */}
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        {/* Route path for owner edit form; returns OwnerEditForm with ...props passed */}
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }}
        />

        {/* //! Search */}
        {/* Route path for search results; returns SearchResults component */}
        <Route path="/search" render={props => {
          return <SearchResults />
        }}
        />
      </>
    )
  }
}

export default ApplicationViews