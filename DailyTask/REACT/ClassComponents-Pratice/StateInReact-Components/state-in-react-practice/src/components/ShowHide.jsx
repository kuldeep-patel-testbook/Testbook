import React, { Component } from 'react'
import '../App.css'
import { useState } from 'react'

class ShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    showFun = () => {
        this.setState((prevState) => {
            return { show: !prevState.show };
        })
    }

    render() {
        return (
            <div>
                {this.state.show && <div className='block'>Block Show</div>}
                <button onClick={this.showFun}>Show / Hide</button>
            </div>
        )
    }
}

// Lets convert the above code in functional useState hooks:
// const ShowHide = () => {
//     const [show, setShow] = useState(false);

//   return (
//     <div>
//         { show && <div className='block'>Block Show</div>} 
//         <button onClick={() => {setShow((prevState)=> !prevState)}}>show/hide</button>
//     </div>
//   )
// }

export default ShowHide
