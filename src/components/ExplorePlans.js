import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
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
      return <PlanThumbnail plan={plan} user={user}/>
    })
  }

  useEffect(() => {

    async function getPlans(){      
      try{
        const response = await fetch('/plans/discover/')
        const data = await response.json() 
        return data
      }
      catch(err)
      {
        console.log(err)
      }   
    }

    getPlans().then(arr => {
      let arrBody = arr.plans
      setPlans(arrBody)
    })},[]); 

  return (
    <>
      <Header />
      <div className="container home">
        <div className="row mt-5">
          <div className="col-6">
            <div className="row justify-content-center mt-5 myplans">
              <ul>
                {/*body*/}                                              
              </ul>
            </div>           
          </div>
        </div> 

        <div className="row justify-content-center mt-5">
          <a className="btn btn-primary" href="/home">Return Home</a>
        </div>  
      </div>
    </>

  )
}

export default ExplorePlans