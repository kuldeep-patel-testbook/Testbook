import React from 'react'

const ArrayDemo1 = () => {
    //const arrayData = [1, 23, 3, 5, 17];
    //console.log(arrayData.forEach(x=>x*x*x));
    //console.log(arrayData.map(x=>x*x*x));

    // console.log('sort using forEach', arrayData.forEach(x=>x*x*x).sort(function (a,b) {
    //     return a - b;
    // }));
    // console.log('sort using map method', arrayData.map(x=>x*x*x).sort(function (a,b) {
    //     return a - b;
    // }))

    const studentData =  [
        {
            name : "Peter Parker",
            id: 1122,
            category : "12th",
            pass: true
        },
        {
            name : "Anis Parker",
            id: 1123,
            category : "Mechnical",
            pass: false
        },
        {
            name : "Somya Sarkar",
            id: 1124,
            category : "Civil",
            pass: true
        },
        {
            name : "Siddha Jain",
            id: 1125,
            category : "MBA",
            pass: false
        }
    ]
    return (
        <div>
            {
                studentData.map((data, id)=> {
                    return (
                    <div key={id}>
                        <h2>Roll No: {data.id}</h2>
                        <h3>Name: {data.name}</h3>
                        <h4>Stream / Class: {data.category}</h4>
                        <p>Result Status: Are You {data.pass ? <span><b>Passed</b></span> : <span><b>Failed</b></span>}!</p>
                    </div>   
                    )
                })
            }
        </div>
    )
}

export default ArrayDemo1