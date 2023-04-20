import React from 'react'
import Select from 'react-select';
import WorkoutThumbnail from './WorkoutThumbnail'
import { useState, useEffect } from 'react'

const WorkoutForm = ({index, setThumbnails}) => {

  const [workouts, setWorkouts] = useState([])
  const [selectedOption, setSelectedOption] = useState({value:"Rest Day", label:"Rest Day"});

  let options = workouts.map(workout => {return {value:`${workout.name}`, label:`${workout.name}`}});

  async function getWorkouts(){      
    try{
      const response = await fetch('/workouts')
      const data = await response.json() 
      return data.workouts
    }
    catch(err)
    {
      console.log(err)
    }   
  }

  async function getWorkout(workout){      
    try{
      let action = "/workouts/"+workout;
      const response = await fetch(action)
      const data = await response.json() 

      return data.workout[0]
    }
    catch(err)
    {
      console.log(err)
    }   
  }

  function changeSelection(event)
  {
    setSelectedOption(event)

    getWorkout(event.value).then(newWorkout => {        
      setThumbnails((current) => 
      {
        let temp = [...current];
        temp[index] = <WorkoutThumbnail workout={newWorkout}/>
        return temp
      })
    })
  }

  useEffect(() => {
    getWorkouts().then(workouts => { 
      setWorkouts(workouts);
      getWorkout("Rest Day").then(defaultWorkout =>
      {
        setThumbnails((current) => [...current, <WorkoutThumbnail workout={defaultWorkout}/>])  
      })        
    })    
  },[]); 


  return (<>          
            <div>
              <p>Day {index + 1} </p>                      

              <div className="select">
                <Select                   
                isSearchable={false}
                isMulti={false}
                name="workouts"  
                value={selectedOption}        
                onChange={e => changeSelection(e)}
                options={options}/>
              </div>
                                           
            </div>
            <br></br>
          </>    
  )
}

export default WorkoutForm