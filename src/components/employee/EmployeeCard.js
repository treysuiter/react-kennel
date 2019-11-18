import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./nukeJimmy.jpeg')} alt="Nuclear Jimmy" />
                    </picture>
                    <h3>Name: <span className="card-employeeName">Nuclear Jimmy</span></h3>
                    <p>Start Date: 01/01/2018</p>
                    <p>Favorite Breed: Tennessee Brown Dog</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;