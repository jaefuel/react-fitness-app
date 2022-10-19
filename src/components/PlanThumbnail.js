import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import WorkoutThumbnail from './WorkoutThumbnail'


const PlanThumbnail = ({plan}) => {

  const element = <FontAwesomeIcon icon={faThumbsUp} />

  return ( 
  <div>
       <li class="workout" style={{listStyle: 'none'}} key={plan.id}>
        <div>Name: <b>{plan.name}</b></div>
        <br></br>
        <div>
          {plan.workouts.map(workout => {
            return <li>
              {workout.name}

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