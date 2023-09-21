
//async function no need to .then use ok
// patch ar somoy id number oi url ar last a jay , param hoy


import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const TestData2 = () => {
  const [users, setUsers] = useState([]);

  //  get data

  //   const  mydata = async ( config) =>{
  //  const ResponseData  = await axios.get(config)
  //     // .then((res)=> console.log(res.data))
  //     // console.log(ResponseData.data)
  //     setUsers(ResponseData.data)
  //   }

  //   useEffect(() => {
  //     mydata("http://localhost:3004/users")
  //   }, [])

  // post data

  // useEffect(() => {
  //   const postData = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:3004/users', {
  //         // Your data object goes here
  //         id: new Date(),
  //         name: 'New Item Dhaka',
  //         description: 'This is a new item',
  //       });

  //       console.log('Data posted:', response.data);
  //     } catch (error) {
  //       console.error('Error posting data:', error);
  //     }
  //   };

  //   postData();
  // }, []);

  // Update data

  // useEffect(() => {
  //   const postData = async () => {
  //     try {
  //       const response = await axios.patch("http://localhost:3004/users/1", {
  //         // Your data object goes here
  //         name: "New Item Dhakahjh ",
  //         email: "This is a new item",
  //       });

  //       console.log("Data posted:", response.data);
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //     }
  //   };

  //   postData();
  // }, []);


  // Delete data

  // useEffect(() => {
  //   const postData = async () => {
  //     try {
  //       const response = await axios.delete("http://localhost:3004/users/15", {
  //         // Your data delet goes here
          
  //       });

  //       console.log("Data posted:", response.data);
  //     } catch (error) {
  //       console.error("Error posting data:", error);
  //     }
  //   };

  //   postData();
  // }, []);


    //  }


  // put Data

  // const  putDataMain = async (config) => {
  //   return await axios(config)
  // }

  // useEffect(() => {
    
  //   const putData= () =>{
  //     try {

  //      const data = putDataMain("http://localhost:3004/users/20", {
  //         // Your data object goes here
  //            name: "New Item Dhakahjh 16",
  //            email: "This is a new item 16",
  //        })

  //        console.log(data.data)
        
  //     } catch (error) {
  //       console.log(error.message)
  //     }

  //   }

  //   putData()
  
   
  // }, [])
  




  return (
    <div>
      Real life Data get/post/update/delete
      {/* { users.map((user) => <h2>{user.name}</h2>)} */}
    </div>
  );
};

export default TestData2;
