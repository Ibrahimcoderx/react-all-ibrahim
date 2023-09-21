import React, { useContext } from 'react' // use korar somoy import korta hoba...
import { userContext } from './userContext'

const Component4 = () => {
const {user, text} = useContext(userContext)
console.log(user)

  return (

    <div>
        <h3>{user.id}</h3>
        <h3>{user.name}</h3>
        <h2>{text}</h2>
     
    </div>

  )
}

export default Component4
