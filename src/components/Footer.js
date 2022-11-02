import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'


const Footer = ({user}) => {
  const element = <FontAwesomeIcon icon={faDumbbell} />

  let userInfo;

  if (Object.keys(user).length == 0)
  {
    userInfo = ""
  }
  else
  {
    userInfo = <div class="f3" style={{ marginTop: "16px"}}>
    <p class="f2" style={{border:"none", background:"none", color:"white", fontSize: "26px"}}>{element}</p>
    <p><strong>User Name</strong>: {user.userName}</p>
    <p><strong>Email</strong>: {user.email}</p>

    <form action="http://localhost:2121/logout" method="POST">
      <button style={{ marginTop: "26px"}} type="submit" class="col-3 btn btn-primary">Logout</button>
    </form>
    </div>  
  }

  return (
    <header class="container flexFooter">
      
      {userInfo}      

    </header>
  )
}

export default Footer