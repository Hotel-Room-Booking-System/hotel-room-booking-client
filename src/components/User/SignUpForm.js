import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { register } from '../User/userSlice'
import { Link, useNavigate } from 'react-router-dom';
import  classes from "./SignUpForm.module.css"

const SignUpForm = (props) => {

  const card = `card ${classes.card}`

    const [firstname,setFirstname] = useState ('')
    const [lastname,setLastname] = useState ('')
    const [username,setUsername] = useState ('')
    const [phone,setPhone] = useState ('')
    const [password,setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')
    const [registerRequestStatus,setRegisterRequestStatus] = useState('idle')

    const onFirstnameChange = (e) => setFirstname(e.target.value)
    const onLastnameChange = (e) => setLastname(e.target.value)
    const onUsernameChange = (e) => setUsername(e.target.value)
    const onPhoneChange = (e) => setPhone(e.target.value)
    const onPasswordChange = (e) => setPassword(e.target.value)
    const onConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

    const canCreate = [firstname,lastname,username,phone,password,confirmPassword].every(Boolean) && registerRequestStatus === 'idle'
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFormSubmit = (e) => {
      e.preventDefault()

      if(canCreate){
        setRegisterRequestStatus('pending')

        try {
          dispatch(
            register({
              user:{
                firstname,
              lastname,
              username,
              phone,
              password,
              confirmPassword
              }
              
             
            })
          ).unwrap()
            setFirstname('')
            setLastname('')
            setUsername('')
            setPhone('')
            setPassword('')
            setConfirmPassword('')

           

        } catch (error) {
          console.log(error)
        }finally{
          setRegisterRequestStatus('idle')
        }
        navigate("/login")
      }
    }

   
   

  return (
    <div className='row mt-4'>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
      <div className={card}>
    <form class={classes.form}>
    <p class={classes.title}>Register </p>
    <p class={classes.message}>Signup now and get full access to our app. </p>
        <div class={classes.flex}>
        <label>
            <input required id ="firstname"  type="text" class={classes.input}  onChange={onFirstnameChange} value={firstname}/>
            <span>Firstname</span>
        </label>

        <label>
            <input  required id ="lastname"  type="text" class={classes.input} onChange={onLastnameChange} value={lastname}/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required id ="username"  type="email" class={classes.input} onChange={onUsernameChange} value={username}/>
        <span>Email</span>
    </label> 

    <label>
        <input required id ="phone"  type="text" class={classes.input} onChange={onPhoneChange} value={phone}/>
        <span>Phone</span>
    </label> 
        
    <label>
        <input required id ="password"  type="password" class={classes.input} onChange={onPasswordChange} value={password}/>
        <span>Password</span>
    </label>
    <label>
        <input required id ="confirmPassword"  type="password" class={classes.input} onChange={onConfirmPasswordChange} value={confirmPassword}/>
        <span>Confirm password</span>
    </label>
    <button class={classes.submit} disabled={!canCreate} onClick={onFormSubmit}>Submit</button>
    <p class="signin">Already have an acount ? <Link to="/login">Signin</Link> </p>
</form>
</div>
      </div>
      <div className='col-md-4'></div>
    </div>
 
  )
}

export default SignUpForm