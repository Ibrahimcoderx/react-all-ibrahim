// 1. createContext()
// 2. Provider rapping all child
// 3. useContext(userContext)


import React, { useState } from 'react'
import Component2 from './Component2'

import { userContext } from './userContext'

const Component1_useContext = () => {

    const [user , setUser] = useState({ id:101, name : "Anisul Islam"})
    const [text , setText]  = useState("hello i am text useContext")

  return (

    <div>
        <userContext.Provider value={ { user, text }}>

           <Component2 />

        </userContext.Provider>
        
    </div>

  )
}

export default Component1_useContext
