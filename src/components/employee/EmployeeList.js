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
  
    return(
      <>
      <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/employees/new") }}>
            Hire Employee
          </button>
        </section>
      <div className="container-cards">
        {this.state.employees.map(employee =>
          <EmployeeCard key={employee.id} 
          employee={employee}
          deleteEmployee={this.deleteEmployee} 
          {...this.props}/>
          
        )}
      </div>
      </>
    )
  }
}

export default EmployeeList