import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span className="employee-name">{this.props.employee.name}</span></h2>
            <p>Start Date: {this.props.employee.startDate}</p>
          </div>
      </div>
    );
  }
}

export default EmployeeCard;