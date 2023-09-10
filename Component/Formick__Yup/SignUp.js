import React, { useState } from 'react'
// import { Formik } from 'formik';

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange =(e) =>{
        setName(  e.target.value)
    }
    const handleEmailChange =(e) =>{
        setEmail(  e.target.value)
    }
    const handlePasswordChange =(e) =>{
        setPassword(  e.target.value)
    }
    
    const handleSubmit =(e) =>{
        const newUser = {
            name,
            email,
            password
        }
        console.log(newUser)
        e.preventDefault();
    }


  return (

    <div>
        <h2>User Sign up</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'> Name</label>
            <input onChange={handleNameChange}
              type="text" 
              id="name" 
              name='name'
              value={name}             
              />

             <br/>
             <br/>

            <label htmlFor='email'> Email</label>
            <input onChange={handleEmailChange}
              type="text" 
              id="email" 
              name='email'
              value={email}
              />

                <br/>
                <br/>

            <label htmlFor='password'> Password</label>
            <input onChange={handlePasswordChange}
              type="text" 
              id="password" 
              name='password'
              value={password}
              />

                <br/>
                <br/>

              <button type='submit'>Submit</button>


        </form>
      
    </div>

  )
}

export default SignUp
