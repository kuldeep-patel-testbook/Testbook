import React, { Component } from 'react'

//######### Class-BasedComponents:
// export default class Demo extends Component {
//   render() {
//     return (
//       <div>Demo</div>
//     )
//   }
// }

//######### ComponentConstructor:
// export default class Demo extends Component {
//     constructor() {
//         super();
//         this.state = { color: "Green" };
//     }
//     render() {
//         return (
//             <div><h2>The Color is {this.state.color}</h2></div>
//         )
//     }
// }

// ######### Props:
// export class Color extends Component {
//   render() {
//     return (
//       <div><h2>The Color is {this.props.color} Car!</h2></div>
//     )
//   }
// }

// Props in constructors:
// export class Demo1 extends Component {
//     constructor(props) {
//         super(props);
//     }
//   render() {
//     return (
//       <div><h2>The color is {this.props.color} car!</h2></div>
//     )
//   }
// }

// ######### Components in components:

export class Demo extends Component {
  render() {
    return (
      <div><h2>My Name is Kuldeep</h2></div>
    )
  }
}


class Demo1 extends Component {
  render() {
    return (
      <div>
        <h1>Who are You!</h1>
        <Demo />
    </div>
    )
  }
}
export default Demo1;
