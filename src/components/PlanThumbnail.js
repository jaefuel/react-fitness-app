import React from 'react'
import WorkoutThumbnail from './WorkoutThumbnail'

const PlanThumbnail = ({plan,handler}) => {
  return ( 
  <div class="plan">
       <li style={{listStyle: 'none'}} key={plan.id}>
        <div>Plan <b>{plan.name}</b></div>
        <div>Description <b>{plan.description}</b></div>
        <br></br>
        <ul class = "planT">
          {plan.workouts.map((workout,index) => {
            return <li style={{listStyle: 'none'}}>
              <div>Day <b>{index + 1}</b></div>
              <WorkoutThumbnail workout={workout}/>           
            </li>
            })}                                   
        </ul> 
            <br></br>           
        </li> 
  </div>
  )
}

export default PlanThumbnail