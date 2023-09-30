//


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter } from './Services/Action/CounterAction'




const Redux1 = () => {
    // const [count, setCount] = useState(0)

    const count = useSelector( state => state.count)
    console.log(count)
    const dispatch = useDispatch();

    const hIncrementClick =()=>{
        // setCount((count)=> count+1)
        dispatch(incrementCounter())
    }


  return (

    <div style={{textAlign:'center', margin:'100px'}}>

      <h2>Counter App</h2>
      <h3>Count: {count} </h3>
      <button onClick={hIncrementClick}>Increment</button>


    </div>
  )
}

export default Redux1
