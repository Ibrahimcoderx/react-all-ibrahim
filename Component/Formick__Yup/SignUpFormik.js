import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';


const SignUpFormik = () => {

    const formik = useFormik({
        initialValues : {
            name:'',
            email:'',
            password:'',
        },
      
        validationSchema: yup.object({
            name: yup.string().min(2, " name must have atleast 2 characters ").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, " name must have atleast 6 characters ").required()
        }),

        onSubmit : (values ,{resetForm} ) => {
            console.log(values);
            resetForm({ values: '' });
        },
        
    })

    // console.error(formik.errors)

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleNameChange =(e) =>{
    //     setName(  e.target.value)
    // }
    // const handleEmailChange =(e) =>{
    //     setEmail(  e.target.value)
    // }
    // const handlePasswordChange =(e) =>{
    //     setPassword(  e.target.value)
    // }
    
    // const handleSubmit =(e) =>{
    //     const newUser = {
    //         name,
    //         email,
    //         password
    //     }
    //     console.log()
    //     e.preventDefault();
    // }


  return (

    <div>
        <h2>User Sign up Yup</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'> Name</label>
            <input onChange={formik.handleChange}
              type="text" 
              id="name" 
              name='name'
              value={formik.values.name}             
              />
             <br/>

              { formik.touched.name && formik.errors.name && (<span style={{color:'red'}}>{formik.errors.name}</span>)} 

             <br/>
             <br/>

            <label htmlFor='email'> Email</label>
            <input onChange={formik.handleChange}
              type="text" 
              id="email" 
              name='email'
              value={formik.values.email}
              />
              <br/>

                  { formik.touched.email && formik.errors.email && (<span style={{color:'red'}}>{formik.errors.email}</span>)}      
               
                <br/>
                <br/>

            <label htmlFor='password'> Password</label>
            <input onChange={formik.handleChange}
              type="text" 
              id="password" 
              name='password'
              value={formik.values.password}
              />
                <br/>

                 { formik.touched.password && formik.errors.password && (<span style={{color:'red'}}>{formik.errors.password}</span>)} 

                <br/>
                <br/>

              <button type='submit'>Submit</button>


        </form>
      
    </div>

  )
}

export default SignUpFormik
