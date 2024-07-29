import React, { Component } from 'react'

class DetailsWithForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            rollno: '',
            show: false
        }
    }

    handleChange(e) {
        this.setState({
            fname: e.target.value,
            rollno: e.target.value
        });

    }
    render() {
        return (
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name='fname' onChange={this.handleChange} />
                <br />
                <br />
                <label htmlFor="rollno">Roll No: </label>
                <input type="text" name="rollno" onChange={this.handleChange} />
                <br />
                <br />

                <button onClick={() => this.setState((prevState) => {
                    return { show: !prevState.show }
                })}
                >Show</button>
                {this.state.show && (
                    <p>Student Name: {this.state.fname} <br /> Roll No: {this.state.rollno}</p>
                )}

            </div>
        )
    }
}

export default DetailsWithForm