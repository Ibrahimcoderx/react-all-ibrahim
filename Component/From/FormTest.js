import React,{useState} from 'react'

const FormTest = () => {

    const [formData, setFormData] = useState({
      // Initialize your form fields here
    });


    const scriptURL = 'https://script.google.com/macros/s/AKfycbx91nIfTe9KgFIQsw4R-YD5lOku68Ysx1jkvrSOTKQHyR_SxFvpxaA-fV1pphCH0XHuAA/exec';

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(e.target),
        });
        if (response.ok) {
          // Handle success here, e.g., show a thank you message or redirect
          window.location.href = "/frontend_assets/thank-you/index2.html";
        } else {
          console.error('Error in form submission');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  return (

    <div>

<section id="placeAnOrder">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Order Form</h3>
            <br />

            <div className="orderDiv">

              
              <form onSubmit={handleSubmit} name="google-sheet">
              {/* Replace these with your form fields */}
              <label htmlFor="fname">First Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              <label for="lname">Mobile Number</label>
              <input type="text" id="lname" name="mobile" placeholder="Your mobile num.." value={formData.mobile} onChange={handleChange} />
              {/* Add more form fields as needed */}
              <label for="lname">Full Address</label>
              <input type="text" id="lname" name="address" placeholder="Your address.." value={formData.address} onChange={handleChange} />
              {/* Add more form fields as needed */}
              <button type="submit">Submit</button>
            </form>
              
            </div>


            <br />
          </div>
        </div>
      </div>
    </section>
      
    </div>

  )
}

export default FormTest
