import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import WorkoutThumbnail from './WorkoutThumbnail'


const MyWorkouts = () => {

  const [workouts, setWorkouts] = useState([])
  const element = <FontAwesomeIcon icon={faThumbsUp} />

  async function getWorkouts(){      
    try{
      const response = await fetch('http://localhost:2121/workouts')
      const data = await response.json() 
      return data
    }
    catch(err)
    {
      console.log(err)
    }   
  }

  useEffect(() => {
    getWorkouts().then(arr => {
      let arrBody = arr.workouts
      setWorkouts(arrBody)
    })},[]); 

  return (
    
    <div class="container">
    <Header />
      
      <div class="row mt-5">
        <div class="col-6">

          <div class="row justify-content-center mt-5">
            <ul>

            {workouts.map(workout => {
              return <WorkoutThumbnail workout={workout}/>                     
              })}
                                                
            </ul>
          </div>  

          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="http://localhost:2121/home">Return Home</a>
          </div>              

        </div>
      </div>
    </div>
  )
}

export default MyWorkouts