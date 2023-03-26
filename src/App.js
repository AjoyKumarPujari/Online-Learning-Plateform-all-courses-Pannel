import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Spinner from "./component/Spinner";
import Cards from "./component/Cards";
import {apiUrl,filterData} from './data'
import { toast } from "react-toastify";
const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);//api call
      let output = await response.json();//output convert to json
     
      //console.log(output);
       //save the data
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went Wrong");
    }
    setLoading(false);
  }

     
  useEffect( () => {
    fetchData();
    },[])
  

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData = {filterData}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex-wrap 
        flex justify-center items-center min-h-[50vh]">
          {
            loading ?   (<Spinner/>) : (<Cards courses = {courses}/>)
          }
        </div> 
      </div>

      
    </div>
  )
};

export default App;
