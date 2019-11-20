import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("employees")
    .then((employeeArray) => {
        this.setState({
            employees: employeeArray
        })
    })
}

deleteEmployee = id => {
  APIManager.delete("employees", id)
    .then(() => {
      APIManager.getAll("employees")
        .then((newEmployees) => {
          this.setState({
            employees: newEmployees
          })
        })
    })
}


render(){
    console.log("Employee List: Render");
  
    return(
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard key={employee.id} 
          employee={employee}
          deleteEmployee={this.deleteEmployee} />
        )}
      </div>
    )
  }
}

export default EmployeeList