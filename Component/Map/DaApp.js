import React from 'react'

import Data from './data.json'
import CardText from './CardText'

const DaApp = () => {

  const indexid = new Date().getTime().toString();
  
    console.log(Data[0].title)

  return (

    // titleText={Data[0].title} dec={Data[0].dese}

    <div style={{display:"flex" }}>
                                  {/* map ar modda j kaj ta korta chassi .  (json file) */}
                                 {/* j kono json or / object data can map easyly */}
        { Data.map((item, index) => <CardText key= {index + indexid} titleText={item.title} dec={item.dese} />)}   
   
    </div>

  )

}


export default DaApp
