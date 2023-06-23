import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { login,getSuccess, getRoles } from '../../features/auth/authSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import  classes from "./LoginForm.module.css"
import { fetchAllUsers } from './userSlice';
import { fetchBooking } from '../Booking/bookingSlice';
const LoginForm = (props) => {

  const dispatch=useDispatch()
  const card = `card px-2 ${classes.card}`

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loginRequestStatus,setLoginRequestStatus] = useState('idle')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    dispatch(fetchAllUsers())
    dispatch(fetchBooking())
    setMessage('')
  },[email,password,dispatch])

  const onEmailChange = e => {setEmail(e.target.value)}
  const onPasswordChange = e => {setPassword(e.target.value)}

  const canLogin = [email,password].every(Boolean) && loginRequestStatus === 'idle'
  
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const success = useSelector(getSuccess)
  const roleType = useSelector(getRoles)
  console.log("RoleType:"+roleType)
  //  const loginRole = roleList.id
  //  console.log("Login Role:"+loginRole)

  const onLogin = (e) => {
    e.preventDefault()
    
    if(canLogin){
      setLoginRequestStatus('pending')

      try {
          dispatch(login({
            username:email,
            password
          })).unwrap()
          
          if(success){
            setEmail('')
            setPassword('')
            if(roleType == 'ROLE_ADMIN'){
              
              navigate("/admin",{ replace:true })
            }else{
            
            navigate(from,{ replace:true })
          }
          }else{
            setMessage(<span className="alert-danger">username or password is incorrect</span>)
          }
      } catch (error) {
        console.error(error)
      } finally {
        setLoginRequestStatus('idle')
      }
    }
  }

  


  return (
    <div className='row mt-5'>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
      <div className={card}>
    <form class="form">
      <h3 className={classes.title}>Sign in to your account</h3>
      <div>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onEmailChange}/>
      </div>
      <div>
      <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={onPasswordChange}/>
      </div>
      <div className='row my-3 px-3'>
        <button type='submit' className='btn btn-primary' onClick={onLogin}>Sign in</button>
      </div>
   </form>
   <p class="text-center my-2">
        No account?
        <Link to="/signup">Sign up</Link>
      </p>
    
   </div>
      </div>
      <div className='col-md-4'></div>
    </div>
  
  )
}

export default LoginForm