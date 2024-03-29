import React from 'react'

const WorkoutThumbnail = ({workout}) => {

  let body;

  if (workout.name.toLowerCase() != "rest day")
  {
    body = <li className="workout" key={workout.id}>

    <div style={{fontSize:"20px"}}><b>{workout.name}</b></div>
    <br></br>
    {<div>
    {workout.drills.map(drill => {
    return <li> 
      <div style={{fontSize:"18px", textDecoration:"underline", marginBottom:"6px"}}><b>{drill[0]}</b></div>
      <div><b>{drill[1]}</b></div>

      <div>Sets: <b>{drill[2]}</b> {drill[4]}: <b>{drill[3]}</b></div>     
      <br></br>               
      </li>
    })}
    </div>}
    
    <br></br> 

  </li>
  }
  else
  {
    body = <li style={{display:"flex", flexDirection:"column", justifyContent:"center"}} className="workout" key={workout.id}>
    <div style={{fontSize:"20px"}}><b>Rest Day</b></div>
    <br></br>
    <br></br> 
    </li>
    
  }

  return ( 
  <div>
    {body}
  </div>
  )
}

export default WorkoutThumbnail