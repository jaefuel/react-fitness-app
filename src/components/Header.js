import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const [user, setUser] = useState({})
  const element = <FontAwesomeIcon icon={faDumbbell} />

  async function getUser(){      
    try{
      const response = await fetch('http://localhost:2121/user', {credentials: 'include'})
      const data = await response.json()
      return data
    }
    catch(err)
    {
      console.log(err)
    }   
  }
  
  useEffect(() => {
    getUser().then(data => {
      setUser({userName:data.userName, email:data.email}) 
    })},[]); 

  return (
    <header class="container flexHeader">
      <div class="text-center f1">
        <h1><a href="/home">Cris' Fitness APP</a></h1>
        <h2>The #1 Fitness Motivation App</h2>
      </div>

      <div class="f2">
              <p style={{border:"none", background:"none", color:"white", fontSize: "26px"}}>{element}</p>
              <p><strong>User Name</strong>: {user.userName}</p>
              <p><strong>Email</strong>: {user.email}</p>
              <a href='http://localhost:2121/logout' class="col-3 btn btn-primary">Logout</a>
      </div>   
    </header>
  )
}

export default Header