import React, { useEffect } from 'react'

//jQuery libraries
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import { useDispatch } from 'react-redux';
import Bookinglist from './BookingList';
import {  fetchBooking } from './bookingSlice';


const BookingShow = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
     
          dispatch(fetchBooking())
      
  },[dispatch]
  )

  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  
  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Booking List</h3>
    </div>
     
    <div className="container">
         
    <table id="example" class="table table-hover table-bordered">

        <thead>
          <tr>
            <th>ID</th>
            <th>Guest Name</th>
            <th>Nrc</th>
            <th>Phone</th>
            <th>CountryOfOrigin</th>
            <th>TotalAdults</th>
            <th>TotalChildren</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
        <Bookinglist/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default BookingShow