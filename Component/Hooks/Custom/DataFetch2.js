import React, { useEffect, useState } from "react";
import CoustomHooks from "./CoustomHooks";


const DataFetch2 = () => {

    const { data, isLoading, error} = CoustomHooks('https://jsonplaceholder.typicode.com/todos')

        const loadindMessage = <p> Data is Loading...</p>
        const errorMessage = <p> {error}</p>

  const TodosElement = 
       data && data.map((todo) => {
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
      { error && errorMessage}
      <h2>Todos Mapping</h2>
       {TodosElement}  
       {/*  html clear code no many js code */}
    </div>
  );
};

export default DataFetch2;
