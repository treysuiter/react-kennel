import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false
    }


handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

constructNewAnimal = evt => {
    evt.preventDefault()
    if (this.state.animalName === "" || this.state.breed === "") {
        window.alert("Please input animal name AND breed")
    } else {
        this.setState({ loadingStatus: true })
        const animal = {
            name: this.state.animalName,
            breed: this.state.breed
        }
        APIManager.post("animals", animal)
            .then(() => this.props.history.push("/animals"))
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
                            id="animalName"
                            placeholder="Robot Name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Model"
                        />
                        <label htmlFor="breed">Model</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )

    }
}
export default AnimalForm