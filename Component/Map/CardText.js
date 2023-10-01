import React from 'react'

const CardText = (props) => {

    const {titleText ,dec} = props;


  return (
    
    <div style={{display:"flex" }}>
            <div style={{background:"#00e28c" , padding:"30px" , margin:"30px", }}>
                <h1>{titleText}</h1>
                <p>{dec}</p>

            </div>
    </div>

  )

}

export default CardText
