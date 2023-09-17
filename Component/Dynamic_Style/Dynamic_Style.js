import React, { useEffect, useState } from "react";

const Dynamic_Style = () => {
  // const error = false;

  const [name, setName] = useState();
  const [validInput, setvalidInput] = useState(false);


    useEffect(() =>{ //   use effact use kor kora hoisa real time update valu ar jonno name ar modda real time update vlalue thaka na

    if (name.length < 2) {
      setvalidInput(false);
    } else {
      setvalidInput(true);
    }
    }, [name])
    
    const handleChange = (e) => {
        setName(e.target.value);
        };
 

  return (
    
    <div>
      {/* <h1 style={
                {color: error ? "red" : "green",
                 backgroundColor : error ? "green" : "red",
                }
                }>Welcome </h1> */}

      <input type="text" value={name} onChange={handleChange}
            // style={{backgroundColor : validInput ? "red" : "green"}}
            className={` ${validInput && "valid" }`}
      />

    </div>
  );
};

export default Dynamic_Style;
