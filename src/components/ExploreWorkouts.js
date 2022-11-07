import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react'
import WorkoutThumbnail from './WorkoutThumbnail'

const ExploreWorkouts = ({user}) => {

  const [workouts, setWorkouts] = useState([])

  let body;

  if (Object.keys(user).length == 0)
  {
    body = ""
  }
  else
  {
    body =  workouts.map(workout => {
      return <WorkoutThumbnail workout={workout}/>                     
    })
  }

  async function getWorkouts(){      
    try{
      let action = "http://localhost:2121/workouts/"
      const response = await fetch(action)
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
  }) 
  }, []); 

  return (
    
    <div class="container">
    <Header />
      
      <div class="row mt-5">
        <div class="col-6">

          <div class="row justify-content-center mt-5">
            <ul class = "workouts">

           {body}
                                                
            </ul>
          </div>  

          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/#/home">Return Home</a>
          </div>                   

        </div>
      </div>
    </div>
  )
}

export default ExploreWorkouts