import $ from 'jquery'
import BookingRoomList from '../BookingRoom/BookingRoomList'

const BookingRoomTable = () => {

    $(document).ready(function(){
        setTimeout(function(){
            $('#example').DataTable()
        },1000)
    })

  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Booking Room List</h3>
    </div>
     
    <div className="container">
         
        <table id="example" class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
           
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
        <BookingRoomList/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default BookingRoomTable