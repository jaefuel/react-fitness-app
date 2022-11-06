import React from 'react'
import Header from './Header'
import AutosizeInput from 'react-input-autosize';
import { useState } from 'react'

const Login = () => {
  {/*let messages;

  if (locals.messages.errors) 
  {
    messages = () => {return messages.errors.forEach( el => {<div class="alert alert-danger">{el.msg}</div>})}
  }
  if (locals.messages.info) 
  {
    messages = () => {return messages.info.forEach( el => {<div class="alert alert-info">{el.msg}</div>})}
  }*/} 

  const [selectedOption1, setSelectedOption1] = useState(null)
  const [selectedOption2, setSelectedOption2] = useState(null)

  return (
    <main class="container">
      <Header />

      <div class="row justify-content-center flexIndex">
        <section class="col-6 mt-5">        

          <form action="http://localhost:2121/login" method="POST">
            <div class="mb-3 df">
              <AutosizeInput
	            name="email"
              type={"email"}
	            value={selectedOption1}
              placeholder="Enter Email"
					    minWidth={175}
              maxLength={50}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption1(e.target.value)}
              />  
            </div>

            <div class="mb-3 df">
              <AutosizeInput
	            name="password"
              type={"password"}
	            value={selectedOption2}
              placeholder="Enter Password"
					    minWidth={175}
              maxLength={50}
              style={{ background: '#eee', borderRadius: 2, padding: 2 }}
              inputStyle={{ border: '1px solid #999', borderRadius: 3, padding: 3, fontSize: 14 }}
	            onChange={e => setSelectedOption2(e.target.value)}
              />         
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

            <div class="row justify-content-center mt-5">
              <a class="btn btn-primary" href="/">Back</a>
            </div>  
        </section>
      </div>
    </main>
  )
}

export default Login