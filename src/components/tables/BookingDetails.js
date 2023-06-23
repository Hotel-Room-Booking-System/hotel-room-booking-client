import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectBookingById } from '../Booking/bookingSlice'
import classes from '../ui/ConfirmModal.module.css'
import SmallImg from '../pages/SmallImg'

const BookingDetails = (props) => {

    const card = `col-md-8 col-lg-6 col-xl-4 ${classes.modal}`


    const booking = useSelector((state) => selectBookingById(state,Number(props.id)) )

  return (
   
    <div class={card}> 
    <div class="card text-black"> 
      
    {/* <img src={bookingRoom.room.} /> */}
     
      <div class="card-body"> 
        <div class="text-center"> 
          <h5 class="card-title">{booking.guestName}</h5> 
          {/* <p class="text-muted mb-4">{user.usename}</p>  */}
        </div> 
        <div> 
          <div class="d-flex justify-content-between"> 
            <span>Phone</span><span>{booking.phone}</span> 
          </div> 
          <div class="d-flex justify-content-between"> 
            <span>Check In</span><span>{booking.checkIn}</span> 
          </div> 
          <div class="d-flex justify-content-between"> 
            <span>Check Out</span><span>{booking.checkOut}</span> 
          </div> 
          <div class="d-flex justify-content-between"> 
            <span>Number Of Rooms</span><span>{booking.numOfRoom}</span> 
          </div> 
          <div class="d-flex justify-content-between"> 
            <span>Total Guests</span><span>{booking.totalAdults + booking.totalChildren} </span> 
          </div> 
          <div class="d-flex justify-content-between"> 
            <span>Special Request</span><span>{booking.specialRequest} </span> 
          </div> 
        </div> 
        <div class="d-flex justify-content-between total font-weight-bold text-center mt-4"> 
          <span>Thanks For Booking With Us!</span> 
        </div> 

      </div> 
    </div> 
 </div> 

  )
}

export default BookingDetails