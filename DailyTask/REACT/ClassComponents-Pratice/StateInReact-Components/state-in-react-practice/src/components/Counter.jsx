import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));

        // OR
        // this.setState((prevState) => {
        //     return { counter: prevState.counter + 1 }
        // });

        //this.state.counter = this.state.counter + 1;  // This is a bad Practice
        console.log('counter', this.state.counter);
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Increase Counter</button>
                <div>Counter: {counter}</div>
            </div>
        )
    }
}

export default Counter