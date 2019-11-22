import React, { Component } from 'react';
import APIManager from '../../modules/APIManager'

class LocationForm extends Component {
    state = {
        locationName: "",
        address: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.locationName === "" || this.state.breed === "") {
            window.alert("Please input name AND address")
        } else {
            this.setState({ loadingStatus: true })
            const location = {
                name: this.state.locationName,
                address: this.state.address
            }
            APIManager.post("locations", location)
                .then(() => this.props.history.push("/locations"))
        }
    }

    render() {
        console.log("location form render")
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationName"
                                placeholder="Location Name"
                            />
                            <label htmlFor="locationName">Name</label>
                            <input type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="address"
                                placeholder="address"
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )

    }

}

export default LocationForm