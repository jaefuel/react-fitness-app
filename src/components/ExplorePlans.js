import React from 'react'
import { useState, useEffect } from 'react'
import PlanThumbnail from './PlanThumbnail'

const ExplorePlans = ({user}) => {

  const [plans, setPlans] = useState([])

  let body;

  if (Object.keys(user).length == 0)
  {
    body = ""
  }
  else
  {
    body =  plans.map((plan) => {           
      return <PlanThumbnail plan={plan}/>
    })
  }

  async function getPlans(){      
    try{
      const response = await fetch('http://localhost:2121/plans/')
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

            {body}             
                                  
            </ul>
          </div>  
          
        </div>
      </div>                
    </div>
  )
}

export default ExplorePlans