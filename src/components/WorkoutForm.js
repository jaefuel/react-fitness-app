import React from 'react'
import { useState, useEffect } from 'react'

const WorkoutForm = ({index}) => {

  const [workouts, setWorkouts] = useState([])

  async function getWorkouts(){      
    try{
      const response = await fetch('http://localhost:2121/workouts')
      const data = await response.json() 
      return data
    }
    catch(err)
    {
      console.log(err)
    }   
  }

  useEffect(() => {
    getWorkouts().then(arr => {
      let arrBody = arr.workouts
      setWorkouts(arrBody)
      console.log(workouts)
    })},[]); 

  return (<>          
            <div class="mb-3">

              <label for="workouts" class="form-label">Day {index + 1} </label>            

              <select name="workouts" id="workouts">
               
               {workouts.length == 0 ? <option value="">No workouts found</option> : workouts.map(workout => {return <option value={workout.name}>{workout.name}</option>})}
              </select>

            </div>
            <br></br>
          </>    
  )
}

export default WorkoutForm