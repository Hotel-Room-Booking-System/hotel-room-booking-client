import React from 'react'
import SmallImg from '../pages/SmallImg'
import { Link } from 'react-router-dom'

const SelectedRoom = () => {
  return (
    <form>
    <div className="card">
    <div className="card-header">
      Selected Rooms
    </div>
    <div className="card-body">
      
      <SmallImg/>
      <Link to="/form">
      <button  className="btn btn-primary">Proceed To Guest Info</button>
      </Link>
      
    </div>
   

   
  </div>
  </form>
  )
}

export default SelectedRoom