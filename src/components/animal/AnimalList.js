import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
// import AnimalManager from '../../modules/APIManager'
import "./Animal.css"
import APIManager from '../../modules/APIManager'

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: [],
    location: ""
  }

  componentDidMount() {
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll("animals")
      .then((animalsArray) => {
        this.setState({
          animals: animalsArray
        })
      })
  }

  deleteAnimal = id => {
    APIManager.delete("animals", id)
      .then(() => {
        APIManager.getAll("animals")
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {

    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/animals/new") }}>
            Admit Robot
          </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default AnimalList

