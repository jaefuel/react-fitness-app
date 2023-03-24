import React from 'react'
import Select from 'react-select';
import WorkoutThumbnail from './WorkoutThumbnail'
import { useState, useEffect } from 'react'

const WorkoutForm = ({index}) => {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null);

  let options;
  let thumbnail;

  {workouts.length == 0 ? options = [{value:"", label:"No workouts found"}]: options = workouts.map(workout => {return {value:`${workout.name}`, label:`${workout.name}`}})}
  {workout == null ? thumbnail = "" : thumbnail = <WorkoutThumbnail workout={workout}/>}

  useEffect(() => {

    async function getWorkouts(){      
      try{
        const response = await fetch('/workouts')
        const data = await response.json() 
        console.log(data)
        return data.workouts
      }
      catch(err)
      {
        console.log(err)
      }   
    }

    async function getWorkout(){      
      try{
        let action = "/workouts/"+String(selectedOption.value);
        const response = await fetch(action)
        const data = await response.json() 
        console.log(data)

        return data.workout[0]
      }
      catch(err)
      {
        console.log(err)
      }   
    }
     
    
    getWorkouts().then(workouts => {
      console.log(selectedOption)
      setWorkouts(workouts)
      if (selectedOption != null)
      {
        getWorkout().then(workout => {
          setWorkout(workout)})
      }
    })

  },[selectedOption]); 



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

            {thumbnail}

          </>    
  )
}

export default WorkoutForm