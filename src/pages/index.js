import React from "react";

import Basic__onClick__Map from "../../Component/Basic__onClick__&__Map";
import FORM1 from "../../Component/FORM/index1";
import FORM2 from "../../Component/FORM/index2";
import Props__data from "../../Component/Props__data__prant_to_Child/Props__data";
import Child__to__parent__Data from "../../Component/Props__data__Child_to_Parent/Child__to__parent__Data";
import SignUp from "../../Component/Formick__Yup/SignUp";
import SignUpFormik from "../..//Component/Formick__Yup/SignUpFormik";
import Toggle from "../../Component/Toggle/Toggle";
import Toggle2 from "../../Component/Toggle/Toggle2";
import FAQS from "../../Component/FAQ/FAQS";
import Effect_hook from "../../Component/Hooks/useEffact/useEffect_hook";
import Effect2 from "../../Component/Hooks/useEffact/useEffect2";

const index = () => {

  // Child__to__parent__Data

  // const handleChildData = (ChildData2) => {
  //   console.log(ChildData2);
  // };

  // Props__data
  // const data = "Hi I am Parent data Form Main index"
  // const data2 = "Hi I am Parent data--2 Form Main index"
  // const data3 = "Hi I am Parent data--3 Form Main index"
  // const data4 = "Hi I am Parent data--4 Form Main index"
  // const data5 = "Hi I am Parent data--5 Form Main index"

  return (

    <div>

      {/* Call Any  Component Hare */}
      {/* <Basic__onClick__Map/> */}
      {/* <FORM1/> */}
      {/* <FORM2/> */}

      {/* <Props__data 
              data={data} 
              data2={data2}
              data3={data3}
              data4={data4}
              data5={data5}
        /> */}

      {/* <Child__to__parent__Data  dataPrant={dataPrant} ChildData={handleChildData} /> */}

      {/* <SignUp/> */}

      {/* <SignUpFormik/> */}

      {/* <Toggle /> */}

      {/* <Toggle2/>
      <FAQS/> */}
     {/* <Effect_hook/> */}
     
     <Effect2/>  {/* data Fetch......................... */}
     

    </div>

  );
};

export default index;
