import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Plans from './MyPlans'

const Home = () => {
  return (
    <div class="container home">
      <Header />
      <Plans />
      <Footer />    
    </div>
  )
}

export default Home