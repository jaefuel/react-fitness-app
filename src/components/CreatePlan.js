import React from 'react'
import WorkoutForm from './WorkoutForm'
import Header from './Header'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import AutosizeInput from 'react-input-autosize';
import WorkoutThumbnail from './WorkoutThumbnail'

const CreatePlan = () => {

  const [thumbnails, setThumbnails] = useState([]);
  const [formIDS, setFormIDS] = useState([])
  const [selectedOption1, setSelectedOption1] = useState([])
  const [selectedOption2, setSelectedOption2] = useState([])


  const add = <FontAwesomeIcon icon={faPlusCircle} />
  const subtract = <FontAwesomeIcon icon={faMinusCircle} />

  function addForm() {
    const randomID = Math.floor(Math.random() * 99999);
    setFormIDS((current) => [...current, randomID]);
    
  }

  function deleteForm() {
    setThumbnails((current)=> 
    {
      let temp = [...current];
      temp.pop();
      return temp;
    });
    
    setFormIDS((current) => {
      let temp = [...current];
      temp.pop();
      return temp;
    });  
  }



  return (
    <div className="container">
      <Header />

      <div className="row mt-5">
        <div className="col-6">

          <div className="mt-5">        
            <h2>Create a Plan</h2>
            <p>In order to create a plan, you'll need to select a workout for each day. In order to create a workout, go to <a className="btn btn-primary" href="/create/workout">Create Workout</a></p>

            <div className="form">

            
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
              
              <div className='toggle'>
                <a style={{border:"none", background:"none", color:"white", fontSize: "20px"}} type="button" onClick={addForm}>{add}</a>
                <a style={{border:"none", background:"none", color:"white", fontSize: "20px"}} type="button" onClick={deleteForm}>{subtract}</a>
              </div>
              

              <h2 className="add fa-solid fa-square-plus"></h2>

              <div>
              {formIDS.map((formID, i) => {
              return <WorkoutForm key={formID} index={i} setThumbnails={setThumbnails}/>
                              
              })}

              </div>

              <button type="submit" className="btn btn-primary">Submit</button>

            </form>

            <ul className = "planT workouts">
                {thumbnails.map((thumbnail,i) =>
                {
                  return <li style={{listStyle: 'none'}} key={formIDS[i]}>
                    
                    <div style={{marginBottom:"8px",fontSize:"18px", color:"white"}}>Day <b>{i + 1}</b></div>
                    {thumbnail}                              
                    </li>
                })}
            </ul>
            </div>

          </div>

          <div className="row justify-content-center mt-5">
            <a className="btn btn-primary" href="/home">Return Home</a>
          </div>  
      
        </div>
      </div>
    </div>
  )
}

export default CreatePlan