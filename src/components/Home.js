import React from 'react'
import Header from './Header'

const Home = () => {

  return (

    <div class="container ">
      <Header />

      <div class="row mt-5">
        <div class="col-6">

          <div class="col-6 flexHome">
            
            <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/plans">Explore Plans</a>
            </div> 

            <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/plans">My Plans</a>
            </div>          

            <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/create/plan">Create Plan</a>
            </div>

            <div class="row justify-content-center mt-5">            
            <a class="btn btn-primary" href="/workouts">Explore Workouts</a>
            </div> 

            <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/workouts">My Workouts</a>
            </div> 

            <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/create/workout">Create Workout</a>
            </div>                               
            
          </div>  

        </div>
      </div>
    </div>
  )
}

export default Home