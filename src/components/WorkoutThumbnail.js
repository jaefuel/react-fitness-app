import React from 'react'

const WorkoutThumbnail = ({workout}) => {

  return ( 
  <div>
    <li class="workout" key={workout.id}>

      <div>Workout <b>{workout.name}</b></div>
      <br></br>
    
      <div>
        {workout.drills.map(drill => {
          return <li> 
            <div><b>{drill[0]}</b></div>
            <div><b>{drill[1]}</b></div>
            <div>Sets: <b>{drill[2]}</b> {drill[4]}: <b>{drill[3]}</b></div>     
            <br></br>               
            </li>
        })}
      </div>
      <br></br> 

    </li>
  </div>
  )
}

export default WorkoutThumbnail