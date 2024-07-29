import React, { Component } from 'react'

export class StateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Kuldeep',
            age: '31',
            rollno: '13034'
        }
    }
  render() {
    return (
      <div className='App'>
        <h3>Name: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Rollno: {this.state.rollno}</h3>
      </div>
    )
  }
}

export default StateDetails