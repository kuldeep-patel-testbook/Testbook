import React, { Component } from 'react'

export class Color extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "red" };
    }
    render() {
        return (
            <div><h2>The Color is {this.state.color}</h2></div>
        )
    }
}
