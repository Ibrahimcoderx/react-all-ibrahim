import React from 'react'
import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const Card = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setuserDetails] = useState([])
    const [lgShow, setLgShow] = useState(false);
   

    const  mydata = async () =>{
      try {
        const ResponseData = await axios.get("https://jsonplaceholder.typicode.com/users",);
        // console.log(ResponseData.data); // Check the response data.
        setUsers(ResponseData.data);
        // console.log(users);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
        
    }

    useEffect(() => {
      mydata()
    }, [])

      const handleClick = async (event2) => {
        const CardId = event2;
    
        try {
          const ResponseData2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${CardId}`);
          setuserDetails(ResponseData2.data);
        } catch (error) {
          console.error("An error occurred while fetching data:", error);
        }
      }
    
      useEffect(() => {
        console.log(userDetails); // Log userDetails whenever it changes
      }, [userDetails]);
   


  return (

 
    <div className='CardMainDiv_1Main' >



      <Container>


           <div className='CardMainDiv_1' onClick={() => setLgShow(true)}>
              { users && users.map((user) => (
                <div className='CardMain_1' key={user.id} onClick={ () => handleClick(user.id)} >
                  <h1>{user.name}</h1>
                  <h3>{user.email}</h3>
                  <h4>username : {user.username}</h4>
                  <h4>id : {user.id}</h4>
                </div>
              ))}
            </div>

            </Container>

            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">

                {userDetails && (<div>
                      <h1> {userDetails.id}</h1>
                      <h1> {userDetails.name}</h1>
                      <h2>  {userDetails.username} </h2>
                      <h4>  {userDetails.email} </h4>
                      <h4>  {userDetails.phone} </h4>
                      <h4>  {userDetails.website} </h4>
                  </div>)
                }
                  
                  {userDetails.address && ( <div>
                    <h4> {userDetails.address.street}</h4> 
                    <h4> {userDetails.address.suite}</h4> 
                    <h4> {userDetails.address.city}</h4> 
                    <h4> {userDetails.address.zipcode}</h4> 
                  </div>)}

                  {userDetails.company && ( <div>
                    <h4> {userDetails.company.name}</h4> 
                    <h4> {userDetails.company.catchPhrase}</h4> 
                    <h4> {userDetails.company.bs}</h4> 
                  </div>)}
                
          
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
            </Modal>


      
    </div>

  )
}

export default Card
