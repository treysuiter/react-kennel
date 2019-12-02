import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'



class Kennel extends Component {
    state = {
        user: false
      }

    // Method to check for logged in user in local storage

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    // Adds entered (or unentered) user info to local storage and calls isAuthenticated

    setUser = (authObj) => {
       
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated()
        });
    }

    //Handles logout functionality

    clearUser = () => {
        localStorage.clear()
        this.setState({user: this.isAuthenticated()})
    }

    //Checks for logged in user on rerender

    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }

    //Renders NavBar and ApplicationViews components

    render() {
        return (
            <>
                {/* Calls NavBar component while pass user and clearUser as props */} 
                <NavBar user={this.state.user} clearUser={this.clearUser}/>
                {/* Calls ApplicationViews component while passing user and setUser as props */}
                <ApplicationViews user={this.state.user}
                    setUser={this.setUser} />
            </>
        )
    }
}

export default Kennel