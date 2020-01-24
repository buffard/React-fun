import React, { Component } from "react";
import AnimalCard from './animal/AnimalCard'
import './Kennel.css'

class Kennel extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Student Kennels <br />
            <small>Loving care when you're not there.</small>
          </h2>
          <address>
            Visit us at the nashville east location
            <br /> 500 puppy way
          </address>
        </div>
        
        <div>
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
        </div>
      </div>
    );
  }
}
export default Kennel