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
    <div className="row mt-5">

      <TabList>
        {plans.map((plan) => {           
            return <Tab>{plan.name}</Tab>
        })}      
      </TabList>    

      <div className="col-6">
        <div className="myplans">
          <ul>
            {plans.map((plan) => {           
            return <TabPanel><PlanThumbnail plan={plan} user={user}/></TabPanel>
            })}             
          </ul>
        </div>  
      </div>
    </div>
  }

  useEffect(() => {
    async function getPlans(){      
      try{
        const response = await fetch('/plans/'+user.id)
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
    })},[user]); 

  return (
    <div>      
      
      <Tabs>
        {body} 
      </Tabs> 
      
      <div className="flexMenu">
          <div className="row justify-content-center mt-5">
            <a className="btn btn-primary" href="/explore/plans">Explore Plans</a>
          </div>  

          <div className="row justify-content-center mt-5">            
          <a className="btn btn-primary" href="/create/plan">Create Plan</a>
          </div>   

          <div className="row justify-content-center mt-5">            
          <a className="btn btn-primary" href="/explore/workouts">Explore Workouts</a>
          </div>

          <div className="row justify-content-center mt-5">            
          <a className="btn btn-primary" href="/create/workout">Create Workout</a>
          </div>            
      </div>                 
    </div>
  )
}

export default MyPlans