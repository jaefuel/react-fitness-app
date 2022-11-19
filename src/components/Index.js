import React from 'react'
import Header from './Header'

const Index = () => {
  return (
    <main className="container"> 

      <Header />

      <div className="row justify-content-around mt-5 flexIndex">     
        <a style={{margin: "10px"}} href="/login" className="col-3 btn btn-primary">Login</a>
        <a style={{margin: "10px"}} href="/signup" className="col-3 btn btn-primary">Signup</a>
      </div>
    </main>
  )
}

export default Index