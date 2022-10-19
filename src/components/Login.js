import React from 'react'

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

  return (
    <main class="container">
      <div class="row justify-content-center">
        <section class="col-6 mt-5">        

          <form action="http://localhost:2121/login" method="POST">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              name="password"
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