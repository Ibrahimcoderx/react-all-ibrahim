import React, { useEffect, useState } from "react";

const Effect_hook = () => {
  const [count, setCount] = useState(0);
  const [isLoding, setIsLoding] = useState(false);

  // const handleOnClick =() =>{
  //     setCount(count => count+1)
  // }

  useEffect(() => {
    //call with first rander and depened on count
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      <h1>useEffact Hooks</h1>
      <h2>Count : {count}</h2>

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          setIsLoding(!isLoding);
        }}
      >
        isLoding
      </button>

      {console.log("randaring")}
    </div>
  );
};

export default Effect_hook;
