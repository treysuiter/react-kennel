import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser()
    this.props.history.push("/")
  }

  handleSearch = () => {
    this.props.history.push("/search")
  }

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
            {(this.props.user) ?
              <>
                <li><Link className="nav-link" to="/animals">Animals</Link></li>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/owners">Owners</Link></li>
                <li><input type="text" className="nav-search" placeholder="Search" onChange={this.handleSearch}/></li>
                <li><Link className="nav-link" onClick={this.handleLogout}>Logout</Link ></li>
              </> : null}
              {(!this.props.user) ? <li><Link className="nav-link" to="/login">Login</Link></li> : null}
          </ul>
        </nav>
      </header >
    )
  }
}

export default withRouter(NavBar);