import React, { useState } from 'react'



const SignUpForm = (props) => {

    const timeToShowSignUp = 100;
    

    setTimeout(function () {
       let signUpForm = document.getElementsByClassName("cont_form_sign_up")[0]
       console.log("signUpForm"+signUpForm)
       signUpForm.style.opacity = 1
      }, timeToShowSignUp);
  
   

  return (
    <div className="cont_forms cont_forms_active_sign_up">
    <div className="cont_img_back_">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/879/372/14/palm-beach-corner-wallpaper-thumb.jpg"
        alt=""
      />
    </div>
    <div className="cont_form_sign_up" style={{display:"block"}}>
   
    <i class='far fa-arrow-alt-circle-left text-light' onClick={props.onArrow}></i>
    <form className='sign_up'>
    <h2 className='text-light'>SIGN UP</h2>
    
    <input type="text" placeholder="First Name" className='form-control mb-2' />
    <input type="text" placeholder="Last Name" className='form-control mb-2' />
    <input type="email" placeholder="Email" className='form-control mb-2' />
    <input type="text" placeholder="Phone" className='form-control mb-2' />
    <input type="password" placeholder="Password" className='form-control mb-2' />
    <input type="password" placeholder="Confirm Password" className='form-control mb-2' />
    <button className="btn_sign_up" onclick="changeToSignUp">
      SIGN UP
    </button>
    </form>
  </div>
  </div>
  )
}

export default SignUpForm