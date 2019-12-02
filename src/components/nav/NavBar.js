import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  //Handles logout with clearUser method passed as props and routes user to home page

  handleLogout = () => {
    this.props.clearUser()
    this.props.history.push("/")
  }

  // Routes user to search page

  handleSearch = () => {
    this.props.history.push("/search")
  }

  // Renders NavBar

  render() {

    return (
      <header>
        <h1 className="site-title">Suiter Robot Repair<br />
          <small>Your droid is the one we are looking for.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            {/* Checks if user is logged in before displaying the following links by utilizing this.props.user passed by props */}
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/animals">Animals</Link></li>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/owners">Owners</Link></li>
                <li><input type="text" className="nav-search" placeholder="Search" onChange={this.handleSearch} /></li>
                <li><Link className="nav-link" onClick={this.handleLogout}>Logout</Link ></li>
              </> : null}
            {/* If this.props.user is false, this displays login link */}
            {(!this.props.user) ? <li><Link className="nav-link" to="/login">Login</Link></li> : null}
          </ul>
        </nav>
      </header >
    )
  }
}

export default withRouter(NavBar);