import React, { useState } from 'react'
import Users from './Users-2'
import NewUser from "../../Component/Project_useContext/NewUser";

const Context_project = () => {

    const [users, setUsers] = useState([
        {id:1, username:'anisul'},
        {id:2, username: "alex warren"},
        {id:3, username: "Ibrahim"},
        {id:4, username: "Rased Vi"},
        {id:5, username: "Soron Vi"},
    ])

    const handleDeleteUser = (id) =>{
      const filteredUsers = users.filter((user) => user.id !== id) // j id ta click korsi sata sara 
      setUsers(filteredUsers)
      console.log(id)
    }

    const handleAddNewUser =(newUser)=>{
      setUsers(prevUser => [...prevUser, newUser ])
    }

  return (

    <div>
        <NewUser handleAddNewUser={handleAddNewUser}/>
        <Users users ={users} handleDeleteUser={handleDeleteUser} />
        <NewUser handleAddNewUser={handleAddNewUser}/>
   
    
    </div>
  )
}

export default Context_project


