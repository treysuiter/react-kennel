import React, { Component } from "react"
import APIManager from "../../modules/APIManager"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      employeeName: "",
      startDate: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName,
        startDate: this.state.startDate
      };

      APIManager.update("employees", editedEmployee)
      .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
      APIManager.get("employees", this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
            startDate: employee.startDate,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="animalName">Employee Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="startDate"
                value={this.state.startDate}
              />
              <label htmlFor="breed">Start Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm