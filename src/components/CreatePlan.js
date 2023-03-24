import React from 'react'
import WorkoutForm from './WorkoutForm'
import Header from './Header'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AutosizeInput from 'react-input-autosize';

const CreatePlan = () => {

  const [workouts, setWorkouts] = useState([])
  const [selectedOption1, setSelectedOption1] = useState([])
  const [selectedOption2, setSelectedOption2] = useState([])

  const element = <FontAwesomeIcon icon={faPlusCircle} />

  function addWorkout() {
    const randomID = Math.floor(Math.random() * 99999);
    setWorkouts((current) => [...current, randomID]);
  }

  return (
    <div className="container">
      <Header />

      <div className="row mt-5">
        <div className="col-6">

          <div className="mt-5">        
            <h2>Create a Plan</h2>
            <p>In order to create a plan, you'll need to select a workout for each day. In order to create a workout, go to <a className="btn btn-primary" href="/create/workout">Create Workout</a></p>

            <form action="/plans/publish" method="POST">
              <div className="mb-3 df">
              <AutosizeInput
	            name="name"
	            value={selectedOption1}
              placeholder="Plan Name"
					    minWidth={175}
              maxLength={50}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption1(e.target.value)}
              />
              </div>  

              <div className="mb-3 df">
              <AutosizeInput
	            name="plandescription"
	            value={selectedOption2}
              placeholder="Description"
					    minWidth={175}
              maxLength={400}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption2(e.target.value)}
              />
              </div> 
              
              <a style={{border:"none", background:"none", color:"white", fontSize: "20px"}} type="button" onClick={addWorkout}>{element}</a>

              <h2 className="add fa-solid fa-square-plus"></h2>

              {workouts.map((workout, i) => {
                return <WorkoutForm key={workout} index={i}/>
                              
              })}

              

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <br></br>

          <h2>Your Workouts</h2>

          <div className="row justify-content-center mt-5">
            <a className="btn btn-primary" href="/home">Return Home</a>
          </div>  
      
        </div>
      </div>
    </div>
  )
}

export default CreatePlan