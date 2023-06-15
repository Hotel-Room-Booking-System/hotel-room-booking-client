import React from 'react'


const SelectedRoomItemForBooking = (props) => {

  return (
    <div className="card my-2">
    <div className="card-header">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img src={props.image1} className="mx-2 w-100" alt="...." />
        </div>
        <div className="col-sm-12 col-md-6">
          <h5 className="text-primary pt-3 d-block me-5"></h5>
          <ul>
            <li>Room Type: {props.roomType}</li>
            <li>Price : {props.price} MMK</li>
          </ul>

         
        </div>
      </div>
    </div>
  </div>
  )
}

export default SelectedRoomItemForBooking