import React, {useState} from 'react'

const NewUser = ({handleAddNewUser}) => {

    const [username, setUsersname] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        const newUser = { id: new Date().getTime().toString() , username: username}
        handleAddNewUser(newUser)
        setUsersname('')
    }

    const handleUsernameChange =(event)=>{
        setUsersname(event.target.value)
    }

  return (

    <div>
        <h2>User Registration</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='username' value={username} onChange={handleUsernameChange}/>
            <button type='summit'>Add User</button>
        </form>
    </div>

  )
}

export default NewUser
