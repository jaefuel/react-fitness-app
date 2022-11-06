import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react'

const WorkoutForm = ({index}) => {

  const [workouts, setWorkouts] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);

  let options;

  {workouts.length == 0 ? options = [{value:"", label:"No workouts found"}]: options = workouts.map(workout => {return {value:`${workout.name}`, label:`${workout.name}`}})}
  
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
    })},[]); 

  return (<>          
            <div class="mb-3">
              <p>Day {index + 1} </p>                      

              <div class="select">
                <Select                   
                isSearchable={false}
                isMulti={false}
                name="workouts"  
                value={selectedOption}        
                onChange={setSelectedOption}
                options={options}/>
              </div>
                                           
            </div>
            <br></br>
          </>    
  )
}

export default WorkoutForm