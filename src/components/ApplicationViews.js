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
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  // isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route path="/login" render={props => {
          //! Login
          return <Login setUser={this.props.setUser} {...props} />
        }} />

        <Route exact path="/" render={(props) => {
          //!Route for home
          return <Home />
        }} />

        <Route exact path="/animals" render={props => {
          //! Routes for robots (animals)
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          //Route for new animal form
          return <AnimalForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        <Route exact path="/locations" render={(props) => {
          //! Routes for locations
          // if (this.props.user) {
          return <LocationList {...props} />
          // } else {
          //   return <Redirect to="/login" />
          // }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />

        <Route exact path="/employees" render={(props) => {
          //! Routes for employees
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />


        <Route exact path="/owners" render={(props) => {
          //! Routes for owners
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }}
        />
        <Route path="/search" render={props => {
          return <SearchResults />
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews