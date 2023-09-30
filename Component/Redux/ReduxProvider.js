import React from 'react'
import Redux1 from './Redux1'
import { Provider } from 'react-redux'
import store from './Services/Store/Store'

const ReduxProvider = () => {

  return (

    <div>
      
      <Provider store={store}>

         <Redux1/>

      </Provider>
 

    </div>
  )
}

export default ReduxProvider
