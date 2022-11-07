import React from 'react'
import Header from './Header'
import AutosizeInput from 'react-input-autosize';
import { useState } from 'react'

const Signup = ({locals}) => {

  const [selectedOption1, setSelectedOption1] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)
  const [selectedOption3, setSelectedOption3] = useState(null)
  const [selectedOption4, setSelectedOption4] = useState(null)

  return (
    <main class="container">
    <Header />

    <div class="row justify-content-center flexIndex">
        <section class="col-6 mt-5">
          {/*if (locals.messages.errors) {
                messages.errors.forEach( el => {
                    <div class="alert alert-danger">{el.msg}</div>
                })    
            }
            if (locals.messages.info) {
                messages.info.forEach( el => {
                    <div class="alert alert-info">{el.msg}</div>
                })   
            }*/}
            
            <form action="http://localhost:2121/signup" method="POST">
                <div class="mb-3 df">
                  <AutosizeInput
	                name="userName"
	                value={selectedOption1}
                  placeholder="Enter Username"
					        minWidth={175}
                  maxLength={50}
                  style={{ background: '#eee', borderRadius: 2, padding: 2 }}
                  inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14}}
	                onChange={e => setSelectedOption1(e.target.value)}
                  />      
                  </div>
                <div class="mb-3 df">
                  <AutosizeInput
	                name="email"
                  type={"email"}
	                value={selectedOption2}
                  placeholder="Enter Email"
					        minWidth={175}
                  maxLength={50}
                  style={{ background: '#eee', borderRadius: 2, padding: 2 }}
                  inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14}}
	                onChange={e => setSelectedOption2(e.target.value)}
                  />    
                </div>
                <div class="mb-3 df">
                  <AutosizeInput
	                name="password"
                  type={"password"}
	                value={selectedOption3}
                  placeholder="Enter Password"
					        minWidth={175}
                  maxLength={50}
                  style={{ background: '#eee', borderRadius: 2, padding: 2 }}
                  inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	                onChange={e => setSelectedOption3(e.target.value)}
                  />    
                </div>
                <div class="mb-3 df">
                  <AutosizeInput
	                name="confirmPassword"
                  type={"password"}
	                value={selectedOption4}
                  placeholder="Confirm Password"
					        minWidth={175}
                  maxLength={50}
                  style={{ background: '#eee', borderRadius: 2, padding: 2 }}
                  inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	                onChange={e => setSelectedOption4(e.target.value)}
                  />    
                  </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

              <div class="row justify-content-center mt-5">
                <a class="btn btn-primary" href="/#/">Back</a>
              </div>  

        </section>
    </div>
</main>
  )
}

export default Signup