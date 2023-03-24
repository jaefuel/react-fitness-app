import React from 'react'
import { useState, useEffect } from 'react'
import WorkoutThumbnail from './WorkoutThumbnail'

const MyWorkouts = () => {

  const [workouts, setWorkouts] = useState([])


  useEffect(() => {
    async function getWorkouts(){      
      try{
        let action = "/workouts/"
        const response = await fetch(action)
        const data = await response.json() 
        return data
      }
      catch(err)
      {
        console.log(err)
      }   
    }
    
    getWorkouts().then(arr => {
      let arrBody = arr.workouts
      setWorkouts(arrBody)
  }) 
  }, []); 

  return (
    
          <div>
            <ul className = "workouts flexPlan container">

              {workouts.map(workout => {
                return <WorkoutThumbnail workout={workout}/>                     
              })}
                                                
            </ul>
          </div>                   
  )
}

export default MyWorkouts