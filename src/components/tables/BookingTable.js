import React from 'react'
import $ from "jquery"
import AdminBookingList from '../Booking/AdminBookingList'

const BookingTable = () => {

    $(document).ready(function(){
        setTimeout(function(){
            $('#example').DataTable()
        },1000)
    })

  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Booking List</h3>
    </div>
     
    <div className="container">
         
        <table id="example" class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Guest Name</th>
            <th>NRC</th>
            <th>Phone</th>
            <th>Country Of Origin</th>
            <th>Total Adults</th>
            <th>Total Children</th>
            <th>Special Request</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
        <AdminBookingList/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default BookingTable