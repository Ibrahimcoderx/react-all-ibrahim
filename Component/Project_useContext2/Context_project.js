import React, { useState } from 'react'
import Users from './Users-2'
import NewUser from "../Project_useContext/NewUser";
import { UserContext } from './Context/UsersConText';

const Context_project2 = () => {

    const [users, setUsers] = useState([
        {id:1, username:'anisul'},
        {id:2, username: "alex warren"},
        {id:3, username: "Ibrahim"},
        {id:4, username: "Rased Vi"},
        {id:5, username: "Soron Vi"},
    ])


  return (

    // Value must user {} and object ar modda value now globaly avilable value

   <UserContext.Provider value={{users,setUsers}}> 
     <div>
        <NewUser/>
        <Users  />
    </div>
   </UserContext.Provider>
  )
}

export default Context_project2


