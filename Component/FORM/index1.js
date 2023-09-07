
import React,{useState} from 'react'




const FORM1 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handaleNameChange =(e)=> {
          setName(e.target.value)
    }
    const handaleEmailChange =(e)=> {
           setEmail(e.target.value)
    }
    const handalePassChange =(e)=> {
           setPassword(e.target.value)  // just event gulo print korlam akhon data gulo stor kora databage a send korta hoba
    }

    const handaleSubmit =(e)=> {
          console.log( "Form is submitad" )

          const userInfo ={
            name,
            email,
            password
          }

          console.log(userInfo)
          e.preventDefault();
    }


  return (

    <div>
      
      <h2>HTML Forms Register</h2>

         <form className='myForm' onSubmit={handaleSubmit}>
                <div>
                    <label>Name : </label>
                    <input onChange={handaleNameChange}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        required />
                </div>

                <div>
                    <label>Email : </label>
                    <input onChange={handaleEmailChange}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        required />
                </div>

                <div>
                    <label>Password : </label>
                    <input onChange={handalePassChange}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        required />
                </div>

                <button type="submit">Register</button>

            </form>


    </div>
  )
}

export default FORM1
