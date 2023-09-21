import React, { useState } from 'react'
import Users from './Users'

const Context_project = () => {

    const [users, setUsers] = useState([
        {id:1, username:'anisul'},
        {id:2, username: "alex warren"},
        {id:3, username: "alex warren"},
        {id:4, username: "alex warren"},
        {id:5, username: "alex warren"},
    ])

    const handleDeleteUser = (id) =>{
      const filteredUsers = users.filter((user) => user.id !== id) // jid ta click korsi sata sara 
      setUsers(filteredUsers)
      console.log(id)
    }

  return (

    <div>

        <Users users ={users} handleDeleteUser={handleDeleteUser}/>
    
    </div>
  )
}

export default Context_project
