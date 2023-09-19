// direct dom manupulation but dom slow hoya jay

import React, { useRef } from 'react'

const UseRef = () => {

    const userNameRef =useRef()
    const PassNameRef =useRef()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const username =userNameRef.current.value;
        const password =PassNameRef.current.value;
        userNameRef.current.style.color ="red"

        console.log({username , password})
    }


  return (

    <div>

        <form onSubmit={handleSubmit} action="">

            <div>
                <lable htmlFor="userName"> UserName:</lable>
                <input type="text" id='userName' ref={userNameRef} />
            </div>

            <div>
                <lable htmlFor="userPassword"> UserPass:</lable>
                <input type="text" id='userPassword' ref={PassNameRef}/>
            </div>

            <button type="submit">Register</button>

        </form>

    </div>

  )
}

export default UseRef
