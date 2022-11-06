import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import AutosizeInput from 'react-input-autosize';

const DrillForm = ({index}) => {
  const [sets, setSets] = useState(true)
  const toggleOn = <FontAwesomeIcon icon={faToggleOn} />
  const toggleOff = <FontAwesomeIcon icon={faToggleOff} />

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);

  let option;


  if (sets)
  {
    option = 
    <div>
    <div class="mb-3 df">
      <AutosizeInput
	      name="sets"
	      value={selectedOption3}
        placeholder="Sets"
				minWidth={100}
        maxLength={5}
        style={{ background: '#eee', borderRadius: 2, padding: 2 }}
        inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	      onChange={e => setSelectedOption3(e.target.value)}
        />
    </div>

    <div class="toggle df">
      <div class="mb-3">
        <AutosizeInput
	      name={[index,'reps']}
	      value={selectedOption4}
        placeholder="Reps"
				minWidth={100}
        maxLength={5}
        style={{ background: '#eee', borderRadius: 2, padding: 2 }}
        inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	      onChange={e => setSelectedOption4(e.target.value)}
        />
      </div>
      <a style={{border:"none", background:"none",  fontSize: "18px"}} type="button" onClick={toggle}>{toggleOff}</a> 
    </div>

    </div>
  }
  else
  {
    option = 
    <div>
      <div class="mb-3 df">
        <AutosizeInput
	      name="sets"
	      value={selectedOption3}
        placeholder="Sets"
				minWidth={100}
        maxLength={5}
        style={{ background: '#eee', borderRadius: 2, padding: 2 }}
        inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	      onChange={e => setSelectedOption3(e.target.value)}
        />

      </div>

      <div class="toggle df">
        
        <div class="mb-3">
        <AutosizeInput
	      name={[index,'secs']}
	      value={selectedOption4}
        placeholder="Secs"
				minWidth={100}
        maxLength={5}
        style={{ background: '#eee', borderRadius: 2, padding: 2 }}
        inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	      onChange={e => setSelectedOption4(e.target.value)}
        />
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
            <div class="mb-3 df">
              <AutosizeInput
	            name="drillname"
	            value={selectedOption1}
              placeholder="Name"
					    minWidth={175}
              maxLength={50}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption1(e.target.value)}
              />
            </div> 

            <div class="mb-3 df">
              <AutosizeInput
	            name="drilldescription"
	            value={selectedOption2}
              placeholder="Description"
              minWidth={175}
              maxLength={200}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption2(e.target.value)}
              />
            </div>                   

              {option}                      

            <br></br>
          </>    
  )
}

export default DrillForm