import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import PlanThumbnail from './PlanThumbnail'

const MyPlans = () => {

  const [plans, setPlans] = useState([])

  async function getPlans(){      
    try{
      const response = await fetch('http://localhost:2121/plans')
      const data = await response.json() 
      return data
    }
    catch(err)
    {
      console.log(err)
    }   
  }

  useEffect(() => {
    getPlans().then(arr => {
      let arrBody = arr.plans
      setPlans(arrBody)
    })},[]); 

  return (
    
    <div class="container">
      <div class="row mt-5">
        <div class="col-6">

          <div class="row justify-content-center mt-5 myplans">
            <ul>

            {plans.map((plan) => {           
                return <PlanThumbnail plan={plan}/>
              })}             
                                  
            </ul>
          </div>  
 
          
        </div>
      </div>

      <div class="flexMenu">
          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/plans">Explore Plans</a>
          </div>  

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/create/plan">Create Plan</a>
          </div>   

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/workouts">Explore Workouts</a>
          </div>

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/create/workout">Create Workout</a>
          </div>            
      </div>                 
    </div>
  )
}

export default MyPlans