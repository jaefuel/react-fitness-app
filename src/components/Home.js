import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Plans from './MyPlans'

const Home = ({user}) => {
  return (
    <div className="container home">
      <Header />  
      <Plans user={user}/>
      <Footer user={user}/>    
    </div>
  )
}

export default Home