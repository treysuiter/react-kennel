import React, { Component } from 'react'
import AnimalCard from '../animal/AnimalCard'
import APIManager from '../../modules/APIManager'

class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: []
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        APIManager.getWithAnimals("employees", this.props.match.params.employeeId)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
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

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                deleteAnimal={this.deleteAnimal}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;