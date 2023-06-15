import React, { useEffect } from 'react'
import RoomList from '../Room/RoomList'
import { useDispatch } from 'react-redux'
import { fetchAllRoom } from '../Room/roomSlice'
import $ from "jquery"

const RoomTable = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllRoom())
    },[dispatch])

    $(document).ready(function(){
        setTimeout(function(){
            $('#example').DataTable()
        },1000)
    })

  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Room List</h3>
    </div>
     
    <div className="container">
         
        <table id="example" class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Room Type</th>
            <th>Image1</th>
            <th>Image2</th>
            <th>Image3</th>
            <th>Description</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
        <RoomList/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default RoomTable