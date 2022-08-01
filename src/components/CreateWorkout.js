import React from 'react'
import DrillForm from './DrillForm'
import { useState } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AutosizeInput from 'react-input-autosize';

const CreateWorkout = () => {

  const [drills, setDrills] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
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
            <h1>Create a Workout</h1>

            <form action="/workouts/publish" method="POST">
              <div class="mb-3 df">
              <AutosizeInput
	            name="name"
	            value={selectedOption}
              placeholder="Workout Name"
				      minWidth={175}
              maxLength={50}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption(e.target.value)}
              />
              </div>  
                       
              <a style={{border:"none", background:"none", color:"white", fontSize: "20px", marginLeft:"10px"}} type="button" onClick={addDrill}>{element} Add Drill</a>

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
          
          <div class="row justify-content-center mt-5">            
          <a class="btn btn-primary" href="/workouts">My Workouts</a>
          </div>    
      
        </div>
      </div>
    </div>
  )
}

export default CreateWorkout