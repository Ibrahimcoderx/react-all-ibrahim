import React from 'react'
import User from './User'

const Users = ({users , handleDeleteUser}) => {

  return (

    <div className='users'>
         
            {users.map(user=> <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />)}          

    </div>
  )
}

export default Users
