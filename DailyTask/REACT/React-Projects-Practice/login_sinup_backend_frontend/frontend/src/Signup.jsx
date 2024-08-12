import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();

    const handleRegister=async (e)=>{
        e.preventDefault();
console.log('in fronend');
        const response= await fetch(`http://localhost:3100/api/auth/register`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password,
                email:email,
            })
        })
        navigate('/')
        const details=await response.json();
        console.log(details);
    }

    const handleChange=()=>{

    }
  return (
  <>


 <form id="signup_record" onSubmit={handleRegister}>
     {/* username */}
  <div className="username">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
  </div>


  {/* email */}
  <div className="email">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </div>


  {/* password */}
  <div className="password">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <button>Submit</button>
 </form>
  </>
  )
}

export default Signup