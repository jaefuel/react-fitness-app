import './App.css'
import Index from './components/Index.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import MyWorkouts from './components/MyWorkouts'
import ExploreWorkouts from './components/ExploreWorkouts'
import CreateWorkout from './components/CreateWorkout'
import MyPlans from './components/MyPlans'
import ExplorePlans from './components/ExplorePlans'
import CreatePlan from './components/CreatePlan'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState({})  

  useEffect(() => {

    async function getUser(){      
      try
      {

        const response = await fetch('/user', {credentials: 'include'})       
        const data = await response.json()       
        setUser({id:data._id,userName:data.userName,email:data.email})   
        
        console.log("User set")
      }
      catch(err)
      {
        console.log(err)
      }   
    }
    
    getUser()
  
  },[]); 

  return (
    <div className="wrapper">
    <Router>
    <>     
      <Routes>
        <Route path='/' element={<Index user={user}/>}/>
        <Route path='/signup' element={<Signup user={user}/>}/>
        <Route path='/login' element={<Login user={user}/>}/>
        <Route path='/home' element={<Home user={user}/>}/>
        <Route path='/create/workout' element={<CreateWorkout user={user}/>}/>     
        <Route path='/create/plan' element={<CreatePlan user={user}/>}/>  
        <Route path='/workouts' element={<MyWorkouts user={user}/>}/> 
        <Route path='/explore/workouts' element={<ExploreWorkouts user={user}/>}/> 
        <Route path='/plans' element={<MyPlans user={user}/>}/>       
        <Route path='/explore/plans' element={<ExplorePlans user={user}/>}/>       
      </Routes> 
    </> 
  </Router> 
  </div>   
  )
}

export default App
