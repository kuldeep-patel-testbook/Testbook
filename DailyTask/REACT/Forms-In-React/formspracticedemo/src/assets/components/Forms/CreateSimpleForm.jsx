import React from 'react'
import { useState } from 'react'

const CreateSimpleForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [hobby, setHobby] = useState([]);
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);

    // const showName = (e) => {
    //     e.preventDefault();

    //     alert(`The full name is ${fname} ${lname} and my hobby is ${hobby} and gender is ${gender}`);
    // }


    const validate = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = emailRegex.test(email);

        if(email!=='' && !isValidEmail) {
            setEmailErr(true);
        }

        // at least one number, at least one letter, correct length
        //const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;


    }
    return (
        <div>
            {/* <form> */}
                <label htmlFor="fname">First Name: </label>
                <input type="text" id='fname' value={fname} onChange={(e) => setFname(e.target.value)} /> <br /><br />

                <label htmlFor="lname">Last Name: </label>
                <input type="text" id='lname' value={lname} onChange={(e) => setLname(e.target.value)} /> <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />

                <label htmlFor="password">Password: </label>
                <input type="text" id='pwd' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />

                <p>
                    Please Select your hobbies:
                    <label htmlFor="cricket">
                        <input type="checkbox" value={hobby} onChange={() => setHobby('Cricket')} />
                        Cricket
                    </label>
                    <label htmlFor="hockey">
                        <input type="checkbox" value={hobby} onChange={() => setHobby('Hockey')} />
                        Hockey
                    </label>
                    <label htmlFor="football">
                        <input type="checkbox" value={hobby} onChange={() => setHobby('Football')} />
                        Football
                    </label>
                </p>
                <p>
                    Please select your Gender:
                    <label htmlFor="male">
                        <input type="radio" name='gender' value={gender} onChange={() => setGender('Male')} defaultChecked={true} />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name='gender' value={gender} onChange={() => setGender('Female')} />
                        Female
                    </label>
                </p>
                <button onClick={validate}>Validate</button>
                {/* <input type="submit" value='Click Me' /> */}
            {/* </form> */}
            <hr />

            {emailErr && <p>Email is invalid</p>}


        </div>
    )
}

export default CreateSimpleForm