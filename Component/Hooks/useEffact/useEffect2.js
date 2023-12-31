import React, { useEffect, useState } from "react";

const Effect2 = () => {

    const [todos, setTodos] = useState(null)

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos")

    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setTodos(data)
        console.log(todos)
    })

  } ,[]);

  return (

    <div>
      <h1>UseEffect Data Fatch</h1>
      <h2>Todos Mapping</h2>
        
        {  
          todos && todos.map((todo) => {
               return (
               <>
                 <h4 key={todo.id}> {todo.title}</h4>
               </>
               )
            })
        }

    </div>
  );
};

export default Effect2;
