import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  const navbg = `navbar navbar-expand-lg navbar-light ${classes.navbg}`
  const name = `navbar-brand  ${classes.name}`
  const navEffect = `navbar-nav ms-auto mb-2 mb-lg-0 ${classes.menu}`

  return (
    <section>
     <nav class={navbg}>
  <div class="container-fluid">
    <Link className={name} to="/">LAND OF HAPPINESS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={navEffect}>
        <li className="nav-item" >
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/find-your">Your Booking</Link>
        </li>
        <li >
          <Link className="nav-link" tabindex="-1" aria-disabled="true" to="/contact-us">Contact Us</Link>
        </li>
        <li >
          <Link className="nav-link" to="/frequently-asked-questions">FAQS</Link>
        </li>
        <li className="nav-item"> 
                <div class="dropdown show"> 
                  <div 
                 className="nav-link" 
                    class="btn btn dropdown-toggle" 
                    role="button" 
                    id="navbarSupportedContent" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                  > 
                    List 
                  </div> 
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> 
                     
                      <Link class="dropdown-item" to="/find-your"> 
                        Your Booking 
                      </Link> 
                      <Link to="/user" class="dropdown-item"> 
                        Payments 
                      </Link> 
                   
                  </div> 
                </div> 
              </li> 
              <li></li>
        <li >
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   

    </section>
    
  
  )
  
}

export default MainNavigation