import React, { useEffect } from 'react'
//jQuery libraries
 
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { fetchRoomType} from '../RoomType/roomTypeSlice';
import { useDispatch } from 'react-redux';
import RoomTypeList from '../RoomType/RoomTypeList';

const RoomTypeTable = () => {

  const dispatch = useDispatch()
  useEffect(() => {
     
        dispatch(fetchRoomType())
      
  },[dispatch]
  )

   //initialize datatable
   $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});

  
  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Room Type List</h3>
    </div>
     
    <div className="container">
         
        <table id="example" className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Room Type</th>
            <th>Description</th>
            <th>Price</th>
            <th>Facilities</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <RoomTypeList/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default RoomTypeTable