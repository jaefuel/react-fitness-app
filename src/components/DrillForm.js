import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

const DrillForm = ({index}) => {
  const [sets, setSets] = useState(true)
  const toggleOn = <FontAwesomeIcon icon={faToggleOn} />
  const toggleOff = <FontAwesomeIcon icon={faToggleOff} />

  let option;


  if (sets)
  {
    option = 
    <div>
    <div class="mb-3">
      <label for="sets" class="form-label">Sets </label>
      <input class="form-control" id="sets" name="sets"></input>
    </div>

    <div class="toggle">
      <div class="mb-3">
        <label for={[index,'reps']} class="form-label">Reps </label>
        <input class="form-control" id={index} name={[index,'reps']}></input>
      </div>
      <a style={{border:"none", background:"none",  fontSize: "18px"}} type="button" onClick={toggle}>{toggleOff}</a> 
    </div>

    </div>
  }
  else
  {
    option = 
    <div>
      <div class="mb-3">
        <label for="sets" class="form-label">Sets </label>
        <input class="form-control" id="sets" name="sets"></input>
      </div>

      <div class="toggle">
        
        <div class="mb-3">
          <label for={[index, 'secs']} class="form-label">Secs </label>
          <input class="form-control" id={index} name={[index, 'secs']}></input>
        </div>
        <a style={{border:"none", background:"none",  fontSize: "18px"}} type="button" onClick={toggle}>{toggleOn}</a> 
      </div>
    </div>
    
  }

  function toggle()
  {
    setSets(current => !current)
  }

  return (<>           
            <div class="mb-3">
              <label for="drillname" class="form-label">Drill {index + 1} </label>
              <input class="form-control" id="drillname" name="drillname"></input>
            </div> 

            <div class="mb-3">
              <label for="drilldescription" class="form-label">Description</label>
              <input type="text" class="form-control" id="drilldescription" name="drilldescription"></input>
            </div>                   

              {option}                      

            <br></br>
          </>    
  )
}

export default DrillForm