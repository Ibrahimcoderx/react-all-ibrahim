import React, { useEffect, useState } from "react";

const loadindMessage = <p> Data is Loading...</p>



const DataFetch = () => {

    const [todos, setTodos] = useState(null)
    const [isLoading , setIsLoading] = useState(true)  //data fatch korar aga j somoy toko nay tokhon ai state kaj korba
    const [error, setError] = useState(null)


     //just dakhar jono set time out
        useEffect(() => {
            setTimeout(()=>{

            fetch("https://jsonplaceholder.typicode.com/todos")
        
            .then((res) => {
                if(!res.ok){
                    throw Error('Fatching is not successful')
                }
                else{
                    return res.json()
                }
              
            })
            .then((data) => {
                setTodos(data)
                console.log(todos)
                setIsLoading(false)
                setError(null)
            })
            .catch((err)=> {
                setError(err.message)
                setIsLoading(false)

            })

             }, 2000)
          } ,[]);


  const TodosElement = 
    todos && todos.map((todo) => {
         return (
         <>
           <h4 key={todo.id}> {todo.title}</h4>
         </>
         )
      })
  

  return (

    <div>
      <h1>UseEffect Data Fatch</h1>
      {isLoading && loadindMessage}
      { error && <h2>{error}</h2>}
      <h2>Todos Mapping</h2>
       {TodosElement}  
       {/*  html clear code no many js code */}
    </div>
  );
};

export default DataFetch;
