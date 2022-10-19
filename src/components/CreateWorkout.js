import React from 'react'
import DrillForm from './DrillForm'
import { useState } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CreateWorkout = () => {

  const [drills, setDrills] = useState([])
  const element = <FontAwesomeIcon icon={faPlusCircle} />

  function addDrill() {
    const randomID = Math.floor(Math.random() * 99999);
    setDrills((current) => [...current, randomID]);
}

  return (
    <div class="container">
      <Header />

      <div class="row mt-5">
        <div class="col-6">

          <div class="mt-5">        
            <h2>Create a Workout</h2>

            <form action="http://localhost:2121/workouts/publish" method="POST">
              <div class="mb-3">
                  <label for="name" class="form-label">Workout Name</label>
                  <input class="form-control" id="name" name="name"></input>
              </div>  
                       
              <a style={{border:"none", background:"none", color:"white", fontSize: "20px"}} type="button" onClick={addDrill}>{element}</a>

              <h2 class="add fa-solid fa-square-plus"></h2>

              {drills.map((drill, i) => {
                return <DrillForm key={drill} index={i}/>
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

export default CreateWorkout