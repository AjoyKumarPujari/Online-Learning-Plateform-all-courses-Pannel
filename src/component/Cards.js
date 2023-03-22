 import React from 'react'
import Card from './Card';
 
 function Cards({courses}) {
    let allCourses = [];
    //returnes you a list of all courses received from the api response
    const getCourses = () => {
        Object.values(courses).forEach( ( courseCategory )=> {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }


   return (
     <div>
         {
         getCourses().map( (course) =>{
           return <Card key={course.id} course={course}/>
        })
        }
     </div>
   )
 }
 
 export default Cards