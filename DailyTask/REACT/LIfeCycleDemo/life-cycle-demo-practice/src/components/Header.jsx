import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouritecolor: "red"
        };
        console.log("Constructor Called");
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("static getDerivedStateFromProps Called");
    //     return { favouritecolor: props.favcol };
    // }
    // componentDidMount() {
    //     console.log("componentDidMount Called");
    //     setTimeout(() => {
    //         this.setState({ favouritecolor: "Yellow" });
    //     }, 5000);
    // }
    // shouldComponentUpdate
    shouldComponentUpdate() {
        return false;
    }
    changeColor = () => {
        this.setState({ favouritecolor: "Green" });
    };
    render() {
        console.log("Render Called");
        return (
            //console.log("Return Called")
            <div>
                <h1 style={{color: this.state.favouritecolor}}>My Favourite Color is {this.state.favouritecolor} </h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>

        )
    }
}
