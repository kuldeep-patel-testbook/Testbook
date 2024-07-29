import React, { Component } from 'react'

export default class HeaderOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritecolor: "red"
    };

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favouritecolor: "blue" });
    }, 1000);
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //     document.getElementById('div1').innerHTML = "Before the update favourite is " + prevState.favouritecolor;
  //     return prevState;
  // }
  componentDidUpdate() {
    document.getElementById('div2').innerHTML = "The updated favourite is " + this.state.favouritecolor;
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.favouritecolor }}>My Favorite Color is {this.state.favouritecolor} </h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}
