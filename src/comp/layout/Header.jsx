import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
<center>
    <nav class="navbar navbar-expand-lg text-black" align="center">
  <div class="container mt-2 mb-3">
  <img src="src/assets/img/logo.png" alt="" className=' logo'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
          

        </li>
        <li class="nav-item dropdown ">
              <Link class="nav-link  dropbtn" to="/ViewUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          View
              </Link>
            </li>
     
            <li class="nav-item dropdown ">
              <Link class="nav-link  dropbtn" to="/Menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
              </Link>
            </li>
            
        <li class="nav-item ">
          <Link class="nav-link  "  to='/Contact'>Contact</Link>
        </li>
      </ul>
    </div>
    </div>
    
</nav></center>


  )
}

export default Header


