import React, { useContext } from 'react' 
import User from './User'
import { useUserContext } from './Costomhook/useUserContext'


const Users = () => {
  const {users} = useUserContext()

  return (

    <div className='users'>
         
            {users.map(user=> <User key={user.id} user={user}  />)}          
            
    </div>
  )
}

export default Users
