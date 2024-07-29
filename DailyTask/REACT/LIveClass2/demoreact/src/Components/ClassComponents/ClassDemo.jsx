import React, { Component } from 'react'

export default class ClassDemo extends Component {
    constructor() {
        super();
        this.state = {
            name: "Peter",
            count: 0,
            like: 0,
            username: "",
            uname:["Kuldeep","Kush","Saiyam","Kevin","Hemang","Pankaj","Mehul","Joy","Jatin","Nikhil"],
            show: () => {
                console.log("show function call");
            }
        }
    }

    handleCount() {
        this.setState(state => ({
            count: state.count + 2
        }));
    }

    handleLike() {
        //const username = prompt("Please enter your name");
        const newLikes = this.state.like + 1;

        
        if(newLikes === 11) {
            this.setState(state => ({
                like: 0,
                username: this.state.uname[""]
            }));
        } else {
            this.setState(state => ({
                like: newLikes,
                username: this.state.uname[this.state.like]
            }));
        }
    }

    render() {
        return (
            <>
                <h1>Class Demo Component</h1>
                <p>The Name is: {this.state.name}</p>
                <p>{this.state.show()}</p>
                <p>{this.state.count}</p>
                <button onClick={() => this.handleCount()}>Counter</button>
                {/* <button onClick={() => this.setState({count:this.state.count + 1})}>Counter</button> */}
                <hr />
                <p>India, a land of rich cultural diversity, celebrates a myriad of festivals throughout the year, each embodying unique traditions and regional flavors. Diwali, the Festival of Lights, symbolizes the victory of light over darkness and good over evil, marked by vibrant decorations and fireworks. Holi, the Festival of Colors, ushers in the spring with playful splashes of colors and joyous gatherings. Durga Puja and Navratri honor the goddess Durga with elaborate rituals and cultural performances. Eid is celebrated with prayers and feasts, reflecting India's significant Muslim population. Other notable festivals include Pongal, Baisakhi, and Christmas, each adding to the nation's colorful tapestry of communal harmony and cultural heritage.</p>
                <p>Number of the people like this content:{this.state.like}</p>
                <p>Recently Like User:{this.state.username}</p>
                <button onClick={() => this.handleLike()}>Like</button>
            </>
        )
    }
}
