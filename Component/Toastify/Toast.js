import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {


    const handleClick = () =>{
        toast("Wow so easy!")
    }
    
    const handleClickDelete = () =>{
        toast("Todo is delete")
    }
    
  return (
    <div>
      <h1>Toast Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus unde culpa neque quia accusamus omnis esse est eligendi blanditiis tempora distinctio illo maiores, nulla in quidem, laborum deserunt sit.</h1>
    <button onClick={handleClick}> Add New Todo</button>
    <button onClick={handleClickDelete}> Add New Todo</button>
    <ToastContainer />

    </div>
  )
}

export default Toast
