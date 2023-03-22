import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";

import Cards from "./component/Cards";
import {apiUrl, filterData} from './data'
import { toast } from "react-toastify";
const App = () => {

  const [courses, setCourses] = useState(null);

    useEffect( () => {
      const filterData = async() => {
        try{
          const res = await fetch(apiUrl);
          const output = await res.json();
          //save the data
          //console.log(data);
          setCourses(output.data);
        }
        catch(error){
          toast.error("Something went Wrong");
        }
      }
      filterData();
    },[]);
  

  return (
    <div>
      <Navbar/>

      <Filter 
       filterData = {filterData}
      />

      <Cards courses={courses}/>
    </div>
  )
};

export default App;
