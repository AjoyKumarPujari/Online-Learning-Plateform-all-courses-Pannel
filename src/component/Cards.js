import React from 'react'
import Card from './Card';
 
 function Cards(props) {
  let courses = props.courses;
    
    //returnes you a list of all courses received from the api response and insert an array
    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array => {
          array.forEach(courseData => {
              allCourses.push(courseData);
          })
      })
      return allCourses;
    }
   return ( 
     <div className="flex flex-wrap justify-center gap-4 mb-4">
         {
         getCourses().map( (course) =>(
            <Card key={course.id} course={course}/>
         ))
        }
     </div>
   )
 }
 
 export default Cards