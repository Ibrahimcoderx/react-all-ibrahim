
// Coustom Hooks Why ?
// useState , useEffect Multiple Time use kora jay
// fatch ar url change korla jano same state golo kaj kora
// Card ba Component bar bar toiri na kora


import React, { useEffect, useState } from "react";


const CoustomHooks = (url) => {
 
const [data, setData] = useState(null)
const [isLoading , setIsLoading] = useState(true)  //data fatch korar aga j somoy toko nay tokhon ai state kaj korba
const [error, setError] = useState(null)


 //just dakhar jono set time out
    useEffect(() => {
        setTimeout(()=>{

        fetch(url)
    
        .then((res) => {
            if(!res.ok){
                throw Error('Fatching is not successful')
            }
            else{
                return res.json()
            }
          
        })
        .then((data) => {
            setData(data)
            console.log(data)
            setIsLoading(false)
            setError(null)
        })
        .catch((err)=> {
            setError(err.message)
            setIsLoading(false)

        })

         }, 2000)
      } ,[]);
      
      
      return { data, isLoading, error} // {} or [] use kora jaba

}

export default CoustomHooks

