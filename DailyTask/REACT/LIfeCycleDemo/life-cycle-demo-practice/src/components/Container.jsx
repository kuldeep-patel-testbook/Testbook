import React, { Component } from 'react'

export class Container extends Component {
    state = { display: true };
    delete = () => {
        this.setState({ display: false });
    }
    render() {
        let comp;
        if (this.state.display) {
            comp = <Child />
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
            </div>
        )
    }
}

class Child extends Component {
    
    // Defining the componentWillUnmount Method
    componentWillUnmount() {
        alert("The component is going to be unmounted");
    }
    render() {
        return <h1>Hello Coders!</h1>;
    }
}

export default Container