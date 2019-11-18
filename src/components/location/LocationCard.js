import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3><span className="card-locationName">East Nashville Location</span></h3>
                    <p>100 Stupid Hipster Pants Blvd</p>
                    <p>Nashville, TN 37216</p>
                </div>
            </div>
        );
    }
}

export default LocationCard;