import React from 'react'
import { useState, useEffect } from 'react'
import PlanThumbnail from './PlanThumbnail'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const MyPlans = ({user}) => {

  const [plans, setPlans] = useState([])

  let body;

  if (plans.length == 0)
  {
    body=
    <div style={{height:"0px",margin:"0px",padding:"0px"}}></div>
  }
  else
  {
    body=
  
    
    <div class="row mt-5">
      <TabList>
        {plans.map((plan) => {           
            return <Tab>{plan.name}</Tab>
        })}      
      </TabList>

      <div class="col-6">
        <div class="row justify-content-center mt-5 myplans">
          <ul>
            {plans.map((plan) => {           
            return <TabPanel><PlanThumbnail plan={plan} user={user}/></TabPanel>
            })}             
          </ul>
        </div>  
      </div>
    </div>
  }

  async function getPlans(){      
    try{
      const response = await fetch('http://localhost:2121/plans/'+user._id)
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
    })},[user]); 

  return (
    <div class="container"> 
      
      <Tabs>
        {body} 
      </Tabs> 

      <div class="flexMenu">
          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/explore/plans">Explore Plans</a>
          </div>  

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/create/plan">Create Plan</a>
          </div>   

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/explore/workouts">Explore Workouts</a>
          </div>

          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/create/workout">Create Workout</a>
          </div>            
      </div>                 
    </div>
  )
}

export default MyPlans