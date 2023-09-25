
import React, { useState, useEffect } from 'react';
import { Dna } from  'react-loader-spinner'


const Loader = () => {

    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay using useEffect
    useEffect(() => {
      setTimeout(() => {
        // Step 4: Set the loading state to false when loading is complete
        setIsLoading(false);
      }, 3000); // Simulating a 3-second loading delay
    }, []);

  return (

    <>

        <h1>My Component</h1>

        {/* Step 5: Conditional rendering based on the loading state */}
        {isLoading ? (

        <div>
             <h1>Loading Spinner Example</h1>

             <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />

                <p>Loading...</p>
        </div>

        ) : (
        <div>
            {/* Your content goes here */}
            Data loaded successfully!
        </div>
        )}
      
    </>

  )
}

export default Loader
