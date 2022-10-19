import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import PlanThumbnail from './PlanThumbnail'


const MyPlans = () => {

  const [plans, setPlans] = useState([])
  const element = <FontAwesomeIcon icon={faThumbsUp} />

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
    <Header />
      
      <div class="row mt-5">
        <div class="col-6">

          <div class="row justify-content-center mt-5">
            <ul>

            {plans.map((plan) => {
              
                return <PlanThumbnail plan={plan}/>
              })}             
                                  
            </ul>
          </div>  

          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/home">Return Home</a>
          </div>              

        </div>
      </div>
    </div>
  )
}

export default MyPlans