import React, { Component } from 'react'

// ###### UsingStateobject:
// export class Fruits extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fruit : "Apple",
//             color : "Red",
//             taste : "Sweet"
//         }
//     }
//   render() {
//     return (
//       <div className='container'>
//         <h1>The Fruit is {this.state.fruit}</h1>
//         <p>It is {this.state.color} in color and {this.state.taste} in taste.</p>
//       </div>
//     )
//   }
// }

// ###### Using State object with Change Value :

export class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: "Apple",
            color: "Red",
            taste: "Sweet"
        }
    }

    changeFruit = () => {
        this.setState({ fruit : "Pomegranate", taste : "sour" });
    }

    render() {
        return (
            <div className='container'>
                <h1>The Fruit is {this.state.fruit}</h1>
                <p>
                    It is {this.state.color} in color and {this.state.taste} in taste.
                </p>
                <button onClick={this.changeFruit}>Change Fruit</button>
            </div>
        )
    }
}

