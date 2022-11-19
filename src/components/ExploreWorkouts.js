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

  useEffect(() => {
    async function getWorkouts(){      
      try{
        let action = "/workouts/"
        const response = await fetch(action)
        const data = await response.json() 
        return data
      }
      catch(err)
      {
        console.log(err)
      }   
    }

    getWorkouts().then(arr => {
      let arrBody = arr.workouts
      setWorkouts(arrBody)
  }) 
  }, []); 

  return (
    
    <div className="container">
    <Header />
      
      <div className="row mt-5">
        <div className="col-6">

          <div className="row justify-content-center mt-5">
            <ul className = "workouts">

           {body}
                                                
            </ul>
          </div>  

          <div className="row justify-content-center mt-5">
            <a className="btn btn-primary" href="/home">Return Home</a>
          </div>                   

        </div>
      </div>
    </div>
  )
}

export default ExploreWorkouts