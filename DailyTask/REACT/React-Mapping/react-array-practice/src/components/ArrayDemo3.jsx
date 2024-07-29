import React from 'react'

const ArrayDemo3 = (props) => {
    const employee = [
        {
            empId: "101",
            empName: "Kuldeep"
        },
        {
            empId: "102",
            empName: "Peter"
        },
        {
            empId: "103",
            empName: "Parker"
        },
        {
            empId: "104",
            empName: "Smith"
        },
        {
            empId: "105",
            empName: "John"
        },
        {
            empId: "106",
            empName: "Puneet"
        },
        {
            empId: "107",
            empName: "Kush"
        },
        {
            empId: "108",
            empName: "Saiyam"
        }

    ]
  return (
    <div style={{margin:20, textAlign: "left"}}>
        {
            employee.map((emp, key)=> {
                return (
                    <div key={key}>
                        <p>Employee Id: {emp.empId}</p>
                        <p>Employee Name: {emp.empName}</p>
                        
                    </div>
                    
                )
            })
        }
        
    </div>
  )
}

export default ArrayDemo3