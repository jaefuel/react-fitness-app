import React from 'react'

const Index = () => {
  return (
    <main class="container">
      <div class="row justify-content-around mt-5">
        <a style={{margin: "10px"}} href="http://localhost:2121/login" class="col-3 btn btn-primary"> Login</a>
        <a style={{margin: "10px"}} href="http://localhost:2121/signup" class="col-3 btn btn-primary"> Signup</a>
      </div>
    </main>
  )
}

export default Index