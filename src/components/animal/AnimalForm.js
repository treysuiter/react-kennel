import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import './AnimalForm.css'

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false
    }
}

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.ListeningStateChangedEvent(stateToChange)
}

constructNewAnimal = evt => {
    evt.preventDefault()
    if (this.state.animalName === "" || this.state.breed === "") {
        windows.alert("Please input animal name AND breed")
    } else {
        this.setState({ loadingStatus: true})
        const animal = {
            name: this.state.animalName,
            breed: this.state.breed
        }
        APIManager.post("animals", animal)
        .then(() => this.PaymentResponse.history.push("/animals"))
    }
}

render