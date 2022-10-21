import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



const PlanThumbnail = ({workout}) => {

  let likeAction = ["http://localhost:2121/workouts/likeWorkout/",workout._id, "?_method=PUT"].join("")
  const element = <FontAwesomeIcon icon={faThumbsUp} />

  return ( 
  <div>
    <li class="workout" style={{listStyle: 'none', backgroundColor:"#ffffff0D"}} key={workout.id}>

      <div>Workout <b>{workout.name}</b></div>
      <br></br>
      
      <div>
        {workout.drills.map(drill => {
          return <li> 
            <b>{drill[0]}</b>
            <div>Sets: <b>{drill[2]}</b> {drill[4]}: <b>{drill[3]}</b></div>     
            <br></br>               
            </li>
        })}
      </div>

      <br></br> 

      <div class="flexLikes">
        <div>Likes: <b>{workout.likes.length - 1}</b> </div>   
        <form
        class="col-1"
        action={likeAction}
        method="POST">
        <button style={{border:"none", background:"none", color:"white", fontSize:"22px"}} type="submit">{element}</button>
        </form>
      </div>

    </li>
  </div>
  )
}

export default PlanThumbnail