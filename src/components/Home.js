import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MyPlans from './MyPlans'

const Home = ({user}) => {
  return (
    <div className="container home">
      <Header />  
      <MyPlans user={user}/>
      <Footer user={user}/>    
    </div>
  )
}

export default Home