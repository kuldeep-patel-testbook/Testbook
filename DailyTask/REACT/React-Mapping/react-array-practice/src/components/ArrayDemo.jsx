import React from 'react'

const ArrayDemo = () => {
    const myArray = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Water Melon'];
    // let items = [];

    // for (let index = 0; index < myArray.length; index++) {
    //     //items = myArray[index];
    //     items.push(<li>{myArray[index]}</li>);

    // }
    
    const user = [
        {
            first_name: "Peter",
            designation: "SpiderMan",
            email: "peterparker@avengers.com"
        },
        {
            first_name: "Iron Man",
            designation: "Iron Man",
            email: "ironman@avengers.com"
        },
        {
            first_name: "Thor odinson",
            designation: "God of Thunder",
            email: "thor@avengers.com"
        }
    ]
    return (
        <div>
            <h1>Array Map Method in React!</h1>
            {/* <ul>{items}</ul> */}

            {/* {myArray.map((data) => {
                return (
                    <ul>
                        <li>{data}</li>
                    </ul>
                )
            })} */}

            {
                user.map((data, id)=> {
                    return (
                        <div key={id}>
                            <h2>{data.first_name}</h2>
                            <h2>{data.designation}</h2>
                            <h2>{data.email}</h2>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default ArrayDemo