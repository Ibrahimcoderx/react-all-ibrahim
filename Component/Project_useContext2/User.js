import React, { useContext } from 'react'
import { useUserContext } from './Costomhook/useUserContext';

const User = ({user}) => {

  const {users,setUsers} = useUserContext()

        const {id, username} = user;

        const handleDelete =(id) =>{
          const filteredUsers = users.filter((user) => user.id !== id) // j id ta click korsi sata sara 
          setUsers(filteredUsers)
          console.log(id)
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
