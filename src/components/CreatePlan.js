import React from 'react'
import WorkoutForm from './WorkoutForm'
import { useState } from 'react'
import Header from './Header'

const CreatePlan = () => {

  const [workouts, setWorkouts] = useState([])
 


  function addWorkout() {
    const randomID = Math.floor(Math.random() * 99999);
    setWorkouts((current) => [...current, randomID]);
  }


  return (
    <div class="container">
      <Header />

      <div class="row mt-5">
        <div class="col-6">

          <div class="mt-5">        
            <h2>Create a Plan</h2>

            <form action="http://localhost:2121/plans/publish" method="POST">
              <div class="mb-3">
                  <label for="name" class="form-label">Plan Name</label>
                  <input class="form-control" id="name" name="name"></input>
              </div>  

              <div class="mb-3">
                  <label for="plandescription" class="form-label">Plan Description</label>
                  <input type="text" class="form-control" id="plandescription" name="plandescription"></input>
              </div> 
              
              <button type="button" onClick={addWorkout}>Add a Workout</button>

              <h2 class="add fa-solid fa-square-plus"></h2>

              {workouts.map((workout, i) => {
                return <WorkoutForm key={workout} index={i}/>
                
              })}

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/home">Return Home</a>
          </div>  
      
        </div>
      </div>
    </div>
  )
}

export default CreatePlan