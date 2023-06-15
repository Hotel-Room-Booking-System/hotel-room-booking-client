import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllBookings, fetchBooking, getAllBookings } from './bookingSlice'

const AdminBookingList = () => {

    const bookingList = useSelector(getAllBookings)
    console.log("In the admin booking list:"+bookingList)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch((fetchBooking()))
    },[dispatch])
  return (
    <div>AdminBookingList</div>
  )
}

export default AdminBookingList