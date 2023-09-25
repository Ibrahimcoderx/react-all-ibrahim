import React from 'react'

const User = ({user, handleDeleteUser}) => {
        const {id, username} = user;


        const handleDelete =(id) =>{
          handleDeleteUser(id)
        }

  return (

    <div className='user'>
        <h2>{id}</h2>
        <p>{username}</p> 
        <p>UserPage</p>
        <button onClick={() =>{handleDelete(id)}}>Delete</button>

    </div>

  )
}

export default User
