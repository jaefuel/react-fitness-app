import React from 'react'

const WorkoutThumbnail = ({workout}) => {

  let body;

  if (workout.name.toLowerCase() != "off day")
  {
    body = <div>
    {workout.drills.map(drill => {
      return <li> 
        <div style={{fontSize:"18px", textDecoration:"underline", marginBottom:"6px"}}><b>{drill[0]}</b></div>
        <div><b>{drill[1]}</b></div>

        <div>Sets: <b>{drill[2]}</b> {drill[4]}: <b>{drill[3]}</b></div>     
        <br></br>               
        </li>
    })}
    </div>
  }
  else
  {
    body = ""
  }

  return ( 
  <div>
    <li class="workout" key={workout.id}>

      <div style={{fontSize:"20px"}}><b>{workout.name}</b></div>
      <br></br>
      {body}
      
      <br></br> 

    </li>
  </div>
  )
}

export default WorkoutThumbnail