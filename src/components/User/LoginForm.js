import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';

const LoginForm = (props) => {

  const timeToShowLogin = 400;
  
  

    setTimeout(function () {
     let loginForm = document.getElementsByClassName("cont_form_login")[0]
        console.log("LoginForm: "+loginForm)
        loginForm.style.opacity = 1;
      }, timeToShowLogin);
      // setTimeout(function () {
      //  let signUpForm = document.getElementsByClassName(".cont_form_sign_up")[1]
      //  signUpForm.style.display = "none";
      // }, timeToHiddenLogin);

     


  return (
    <div class="cont_forms cont_forms_active_login">
    <div class="cont_img_back_">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/151/313/143/awesome-tropical-beach-hd-wallpaper-wallpaper-thumb.jpg"
        alt=""
        className='w-100'
      />
    </div>
    <div class="cont_form_login" style={{display:"block"}}>
     
      <i className='far fa-arrow-alt-circle-left text-light' onClick={props.onBack}></i>
      <form className='login'>
      
      <h2 className='text-light'>LOGIN</h2>
      <input type="email" placeholder="Email" className='form-control mb-3'/>
      <input type="password" placeholder="Password" className='form-control mb-3' />
      <button class="btn_login">
        LOGIN
      </button>
      </form>
    </div>

   
  </div>
  )
}

export default LoginForm