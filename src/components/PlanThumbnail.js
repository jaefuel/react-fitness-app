import React from 'react'
import WorkoutThumbnail from './WorkoutThumbnail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const PlanThumbnail = ({plan, user}) => {
  let saveAction = "/plans/publish/"+plan._id
  const element = <FontAwesomeIcon icon={faClone} />

  let likeAction = ["/plans/likePlan/",plan._id, "?_method=PUT"].join("")
  const element2 = <FontAwesomeIcon icon={faThumbsUp} />

  let form;
  
  if ((user && (plan.user == user._id)) || !user)
  {
    form= 
    <div></div> 
  }
  else
  {
    form= 
    <form
    class="col-1 save"
    action={saveAction}
    method="POST">
    <button style={{border:"none", background:"none", color:"white", fontSize:"22px"}} type="submit">{element} Save Plan</button>
    </form> 
  }

  return ( 
  <li style={{listStyle: 'none'}} key={plan._id}>
    <div class="plan">   
        <div style={{marginTop:"8px",marginBottom:"8px",fontSize:"22px"}}><b>{plan.name}</b></div>
        <div><b>{plan.description}</b></div>
        <br></br>
        <ul class = "planT">
          {plan.workouts.map((workout,index) => {
            return <li style={{listStyle: 'none'}}>
              <div style={{marginTop:"8px",marginBottom:"8px",fontSize:"18px"}}>Day <b>{index + 1}</b></div>
              <WorkoutThumbnail workout={workout}/>                 
            </li>
            })}                                   
        </ul> 
        <br></br>

        <div class="flexPlan">
          <div class="flexLikes">
          <div>Likes: <b>{plan.likes.length - 1}</b> </div>   
          <form
          class="col-1"
          action={likeAction}
          method="POST">
          <button style={{border:"none", background:"none", color:"white", fontSize:"22px",marginRight:"8px"}} type="submit">{element2}</button>
          </form>
          </div>

          {form} 
        </div>
                        
    </div>
  </li> 
  )
}

export default PlanThumbnail