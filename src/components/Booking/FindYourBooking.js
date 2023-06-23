// import { Link } from "react-router-dom";
// import classes from "./YourBooking.module.css";
// import { getUser } from "../../features/auth/authSlice";
// import { useSelector } from "react-redux";
// import { selectBookingById } from "./bookingSlice";
// import { selectRoomById } from "../User/userSlice";



// const FindYourBooking = (props) => {

//   const user = useSelector(getUser)
 
//   const booking = useSelector((state)=> selectBookingById(state,Number(props.bookingId)))
//   const room = props.room
//   console.log("Booking in find your booking: "+booking)
//   console.log("Room in find your booking: "+room)

//   return (
//     <div class="col-md-8 col-lg-6 col-xl-4"> 
//     <div class="card text-black"> 
//       <Link className={classes.btn} to={`/find-your/updateBooking/${props.id}`} > 
//       <i class='far fa-edit'></i> 
//     </Link> 
//     <img src={room.image1} />
//       {/* <SmallImg />  */}
//       <div class="card-body"> 
//         <div class="text-center"> 
//           {/* <h5 class="card-title">{booking.guestName}</h5>  */}
//           <p class="text-muted mb-4">{user.usename}</p> 
//         </div> 
//         <div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Phone</span><span>{booking.phone}</span> 
//           </div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Check In</span><span>{booking.checkIn}</span> 
//           </div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Check Out</span><span>{booking.checkOut}</span> 
//           </div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Number Of Rooms</span><span>{booking.numOfRoom}</span> 
//           </div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Total Guests</span><span>{booking.totalAdults + booking.totalChildren} </span> 
//           </div> 
//           <div class="d-flex justify-content-between"> 
//             <span>Special Request</span><span>{booking.specialRequest} </span> 
//           </div> 
//         </div> 
//         <div class="d-flex justify-content-between total font-weight-bold text-center mt-4"> 
//           <span>Thanks For Booking With Us!</span> 
//         </div> 

//       </div> 
//     </div> 
//  </div> 
//   )
// }

// export default FindYourBooking coded by htet


import React from 'react';
import { Link } from 'react-router-dom';
import classes from './YourBooking.module.css';
import { getUser } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { selectBookingById } from './bookingSlice';
import { selectRoomById } from '../User/userSlice';

const FindYourBooking = (props) => {
  const user = useSelector(getUser);
  const booking = useSelector((state) => selectBookingById(state, Number(props.bookingId)));
  const room = useSelector((state) => selectRoomById(state, props.room));

  console.log('Booking in find your booking: ', booking);
  console.log('Room in find your booking: ', room);

  return (
    <div className={`col-md-8 col-lg-6 col-xl-4 ${classes.cardContainer}`}>
      <div className="card text-black">
        <Link className={classes.btn} to={`/find-your/updateBooking/${props.id}`}>
          <i className="far fa-edit"></i>
        </Link>
        {/* <img src={room.image1} alt={room.name} /> */}
        <div className="card-body">
          <div className="text-center">
            <p className="text-muted mb-4">{user.username}</p>
          </div>
          <div>
            <div className="d-flex justify-content-between">
              <span>Phone</span>
              <span>{booking.phone}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Check In</span>
              <span>{booking.checkIn}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Check Out</span>
              <span>{booking.checkOut}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Number Of Rooms</span>
              <span>{booking.numOfRoom}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total Guests</span>
              <span>{booking.totalAdults + booking.totalChildren}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Special Request</span>
              <span>{booking.specialRequest}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold text-center mt-4">
            <span>Thanks For Booking With Us!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourBooking;
