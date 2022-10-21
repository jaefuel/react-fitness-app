import React from 'react'
import Header from './Header'

const Signup = ({locals}) => {
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
                <div class="mb-3">
                    <label for="userName" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="userName" name="userName"></input>
                  </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"></input>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" name="password"></input>
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"></input>
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

export default Signup