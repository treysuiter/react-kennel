import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import AnimalCard from './animal/AnimalCard'
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          //Route for home
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          //Route for animals
          return <AnimalList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          //Route for new animal form
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
            {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews