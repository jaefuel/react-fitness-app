import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react'

const WorkoutForm = ({index}) => {

  const [workouts, setWorkouts] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);

  let options;

  {workouts.length == 0 ? options = [{value:"", label:"No workouts found"}]: options = workouts.map(workout => {return {value:`${workout.name}`, label:`${workout.name}`}})}

  useEffect(() => {

    async function getWorkouts(){      
      try{
        const response = await fetch('/workouts')
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
    })},[]); 

  return (<>          
            <div className="mb-3">
              <p>Day {index + 1} </p>                      

              <div className="select">
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