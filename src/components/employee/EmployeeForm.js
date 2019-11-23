import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        startDate: "",
        loadingStatus: false
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault()
        if (this.state.employeeName === "" || this.state.startDate === "") {
            window.alert("Please input employee name AND start date")
        } else {
            this.setState({ loadingStatus: true })
            const employee = {
                name: this.state.employeeName,
                startDate: this.state.startDate
            }
            APIManager.post("employees", employee)
                .then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                placeholder="Employee Name"
                            />
                            <label htmlFor="employeeName">Name</label>
                            <input type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="startDate"
                                placeholder="Start Date"
                            />
                            <label htmlFor="startDate">Start Date</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }
}
export default EmployeeForm