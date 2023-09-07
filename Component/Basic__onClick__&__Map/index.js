
import React, { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];


const listItems = products.map(product =>

  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
    
  </li>

);


const Basic__onClick__Map = () => {

  const [styles, setStyles] = useState({
    backgroundColor: 'white',
    textColor: 'black',
  });


  const changeStyles = () => {
    setStyles({
      backgroundColor: 'blue',
      textColor: 'white',
    });
  };


  const [backgroundColor, setBackgroundColor] = useState('white');
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  
  return (

    
    <div  style={{ backgroundColor: backgroundColor, minHeight: '100vh', padding: '20px' }}>

      <button onClick={() => changeBackgroundColor('blue')}>Blue Background</button>
      <button onClick={() => changeBackgroundColor('green')}>Green Background</button>
      <button onClick={() => changeBackgroundColor('pink')}>Pink Background</button>
      <button onClick={() => changeBackgroundColor('white')}>White Background</button>
      <div>
        Content with dynamic background color
      </div>


        <div>
          <button onClick={changeStyles}>Change Styles</button>
          <div
            style={{
              backgroundColor: styles.backgroundColor,
              color: styles.textColor,
              padding: '100px',
            }}
          >
            Content with dynamic styles
          </div>
        </div>


          <ul>{listItems}</ul>

         <h1 style={{ backgroundColor: backgroundColor, padding: '20px' }}>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
            
          />

    </div>
  )
}

export default Basic__onClick__Map
