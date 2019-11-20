import React, { Component } from 'react'
//import the components we will need
// import EmployeeCard from './EmployeeCard'
// import EmployeeManager from '../../modules/APIManager'
// import LocationCard from './LocationCard';
import APIManager from '../../modules/APIManager';
import OwnerCard from './OwnerCard';

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("OWNER LIST: ComponentDidMount");
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

render(){
    console.log("Owner List: Render");
    console.log("owner array", this.state.owners)
  
    return(
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard key={owner.id} 
          owner={owner}
          deleteOwner={this.deleteOwner}  />
        )}
      </div>
    )
  }
}

export default OwnerList