import React, { useState } from "react";

export const Toggle2 = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div style={{ backgroundColor: "pink", padding: "1rem" }}>
      <h1>Toggle</h1>

        { toggle && ( <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        ducimus porro praesentium iste cupiditate! Fugiat ullam odio eligendi.
        Itaque, similique! Culpa, deleniti dolorem ut consequatur quas sequi
        mollitia quod dicta.
      </p>) }

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setToggle(!toggle)}>{ toggle ? "Hide" : "Show"}</button>
        
      </div>
    </div>
  );
};

export default Toggle2
