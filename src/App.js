import logo from './logo.svg';
import './App.css';
import Index from './components/Index.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import MyWorkouts from './components/MyWorkouts'
import CreateWorkout from './components/CreateWorkout'
import MyPlans from './components/MyPlans'
import CreatePlan from './components/CreatePlan'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"




function App() {
  return (
    <Router>
      <>     
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/create/workout' element={<CreateWorkout />}/>     
          <Route path='/create/plan' element={<CreatePlan />}/>  
          <Route path='/workouts' element={<MyWorkouts/>}/> 
          <Route path='/plans' element={<MyPlans/>}/>          
        </Routes> 
      </> 
    </Router> 
  )
}

export default App
