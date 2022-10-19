import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import WorkoutThumbnail from './WorkoutThumbnail'


const PlanThumbnail = ({plan,index}) => {

  const element = <FontAwesomeIcon icon={faThumbsUp} />

  return ( 
  <div>
       <li class="workout" style={{listStyle: 'none'}} key={plan.id}>
        <div>Plan <b>{plan.name}</b></div>
        <div>Description <b>{plan.description}</b></div>
        <br></br>
        <div>
          {plan.workouts.map((workout,index) => {
            return <li>
              <div>Day <b>{index + 1}</b></div>
              <WorkoutThumbnail workout={workout}/>           
            </li>
            })}                                   
            </div> 
            <br></br>           
        </li> 
  </div>
  )
}

export default PlanThumbnail