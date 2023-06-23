import classes from "./YourBooking.module.css";
import SmallImg from "../pages/SmallImg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooking, fetchUserBooking, getAllBookings, selectBookingByUserId, selectBookingByUsername } from "./bookingSlice";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEmail, getUser } from "../../features/auth/authSlice";
import { findRoomByselected } from "../Room/roomSlice"
import { selectBookingRoomByBkId } from "../BookingRoom/bookingRoomSlice";
import YourBookingRoom from "./YourBookingRoom";



const YourBooking = () => {

 // const { userId } = useParams()
  const dispatch = useDispatch()
  const card = `col-md-3 ml-5 mt-4 ${classes.card}`;

  const user = useSelector(getUser)

  const loginUserId = user.id
  console.log("UsersID :"+ loginUserId)

  const bookings = useSelector((state) => selectBookingByUsername(state,String(user.username)))

  
  
 

  // const bookings = useSelector((state) => selectBookingByUserId(state,Number(loginUserId)))
  
  console.log("bookings in your booking"+bookings)

  //  const selectedRooms = useSelector(findRoomByselected);
  // const count = Object.keys(selectedRooms).length

  // console.log("No of room:"+count)

  useEffect(()=>{
    dispatch (fetchBooking())
  
  },[dispatch])

  


  return (
    <section style={{backgroundcolor: "#eee" }}> 

  <div class="container py-5"> 
    <div class="row justify-content-center"> 
    {  bookings.map(booking =>( 
        <YourBookingRoom
          key={booking.id}
          id={booking.id}
          guestName = {booking.guestName}
          phone = {booking.phone}
          checkIn = {booking.checkIn}
          checkOut = {booking.checkOut}
          totalAdults = {booking.totalAdults}
          totalChildren = {booking.totalChildren}
          numOfRoom = {booking.numOfRoom}
          specialRequest = {booking.specialRequest}
          bookingRoom = {booking.bookingRooms}
         />
     ))} 
    </div> 
  </div>
</section>
 
  );
};

export default YourBooking;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllPayments,
//   getAllPayments,
//   getPaymentError,
//   getPaymentStatus,
// } from "../Payment/paymentSlice";

// import classes from "./YourBooking.module.css";

// const YourBooking = () => {
//   const [list, setList] = useState([]);

//   const cardbody3 = `col-md-12 col-sm-12 mx-3  ${classes.card3}`;

//   const paymentList = useSelector(getAllPayments);
//   const arr = Object.values(paymentList);

//   const paymentStatus = useSelector(getPaymentStatus);
//   const paymentError = useSelector(getPaymentError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (paymentStatus === "idle") {
//       dispatch(fetchAllPayments());
//     }
//   }, [paymentStatus, dispatch]);

//   let content;

//   if (paymentStatus === "loading") {
//     content = <p>Loading.....</p>;
//   }

//   useEffect(() => {
//     setList(arr);
//   }, [arr]);

//   return (
//     <section>
//       <img
//         src="https://c4.wallpaperflare.com/wallpaper/952/263/731/ocean-underwater-wallpaper-preview.jpg"
//         className="bookingImg"
//         alt=""
//       />
//       <div className={cardbody3}>
//         <div className="card mx-5">
//           <div
//             className="accordion accordion-flush"
//             id="accordionFlushExample"
//           >
//             <div className="accordion-item">
//               <button
//                 className="accordion-button collapsed"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#flush-collapseOne"
//                 aria-expanded="false"
//                 aria-controls="flush-collapseOne"
//               >
//                 Aung Phyo Hein
//               </button>
//               <div
//                 id="flush-collapseOne"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#accordionFlushExample"
//               >
//                 <div className="row">
//                   <div className="col-7">
//                     <div className={classes.text}>
//                       <h4 className="text-muted mt-3 medium">Check In Info</h4>
//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">Check-in</label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>May 24,2023.Wednesday</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">Check-Out</label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>May 26,2023.Friday</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">Rooms</label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>1 Rooms</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">
//                             Number Of Guest
//                           </label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>2 Adults</label>
//                         </div>
//                       </div>
//                     </div>
//                     <div className={classes.text}>
//                       <h4 className="text-muted mt-3 medium">
//                         Guest Information
//                       </h4>
//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">Name</label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>Aung Phyo Hein</label>
//                         </div>
//                       </div>

//                       <div className="row mt-3">
//                         <div className="col-5">
//                           <label className="text-muted medium">
//                             Phone Number
//                           </label>
//                         </div>
//                         <div className="col-7 ">
//                           <label>092016270</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">Email</label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label>aph7720@gmail.com</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-5 mt-3">
//                     <h4 className="text-muted mt-3 medium">Payment</h4>
//                     <div className="mt-3 ml-2">
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">Total</label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label></label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">
//                             Holder Name
//                           </label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label>Aung Phyo Hein</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">CVC</label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label>123</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">
//                             Card Number
//                           </label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label>2222</label>
//                         </div>
//                       </div>
//                       <div className="row mt-3">
//                         <div className="col-5 mb-3">
//                           <label className="text-muted medium">Card Type</label>
//                         </div>
//                         <div className="col-7 mb-3 ">
//                           <label>Master Card</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <PaymentShow/> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YourBooking;
    // <section>
    //   <img
    //     src="https://c4.wallpaperflare.com/wallpaper/952/263/731/ocean-underwater-wallpaper-preview.jpg"
    //     className="bookingImg"
    //     alt=""
    //   />
    //   <div className={cardbody3}>
    //     <div className="card mx-5">
    //       <div class="accordion accordion-flush" id="accordionFlushExample">
    //         <div class="accordion-item">
    //           <button
    //             class="accordion-button collapsed"
    //             type="button"
    //             data-bs-toggle="collapse"
    //             data-bs-target="#flush-collapseOne"
    //             aria-expanded="false"
    //             aria-controls="flush-collapseOne"
    //           >
    //             Aung Phyo Hein
    //           </button>
    //           <div
    //             id="flush-collapseOne"
    //             class="accordion-collapse collapse"
    //             data-bs-parent="#accordionFlushExample"
    //           >
    //             <div className="row">
    //               <div className="col-7">
    //                 <div className={classes.text}>
    //                   <h4 className="text-muted mt-3 medium">Check In Info</h4>
    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">Check-in</label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>May 24,2023.Wednesday</label>
    //                     </div>
    //                   </div>
    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">Check-Out</label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>May 26,2023.Friday</label>
    //                     </div>
    //                   </div>
    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">Rooms</label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>1 Rooms</label>
    //                     </div>
    //                   </div>
    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">
    //                         Number Of Guest
    //                       </label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>2 Adults</label>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className={classes.text}>
    //                   <h4 className="text-muted mt-3 medium">
    //                     Guest Information
    //                   </h4>
    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">Name</label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>Aung Phyo Hein</label>
    //                     </div>
    //                   </div>

    //                   <div className="row mt-3">
    //                     <div className="col-5">
    //                       <label className="text-muted medium">
    //                         Phone Number
    //                       </label>
    //                     </div>
    //                     <div className="col-7 ">
    //                       <label>092016270</label>
    //                     </div>
    //                   </div>
    //                   <div className="row mt-3">
    //                     <div className="col-5 mb-3">
    //                       <label className="text-muted medium">Email</label>
    //                     </div>
    //                     <div className="col-7 mb-3 ">
    //                       <label>aph7720@gmail.com</label>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>