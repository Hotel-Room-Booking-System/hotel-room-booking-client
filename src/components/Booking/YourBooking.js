import classes from "./YourBooking.module.css";
import SmallImg from "../pages/SmallImg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooking, getAllBookings } from "./bookingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const YourBooking = () => {
  const dispatch = useDispatch()
  const card = `col-md-3 ml-5 mt-4 ${classes.card}`;

  const bookings = useSelector(getAllBookings)
  console.log("bookings"+bookings)
  useEffect(()=>{
    dispatch (fetchBooking())
  
  },[dispatch])

  


  return (
    <div className="container">
    <div className="row">
      {
        bookings.map(booking =>(
<div class={card}>
          <div class={classes.cardfront}>
            <div>
              <SmallImg />{" "}
            </div>
          
            <div className="row mt-5">
              <div className="col-md-5">
                <label>Name </label>
              </div>
              <div className="col-md-7">
                <label>{booking.guestName}</label>
              </div>
            </div>
            <div className="row mt-2 ">
              <div className="col-md-5">
                <label>Phone Number </label>
              </div>
              <div className="col-md-7">
                <label>{booking.phone}</label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-5">
                <label>Email </label>
              </div>
              <div className="col-md-7">
                <label>aph7720@gmail.com</label>
              </div>
            </div>
          </div>
          
          <div class={classes.cardback}>
          <Link className={classes.btn} to={`/find-your/updateBooking/${booking.id}`} >
          <i class='far fa-edit'></i>
        </Link>
            <div className="row mt-2">
              <div className="col-md-5">
                <label> Check-in </label>
              </div>
              <div className="col-md-7">
                <label>May 24,2023</label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-5">
                <label>Check-Out </label>
              </div>
              <div className="col-md-7">
                <label>May 26,2023</label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-5">
                <label>Rooms </label>
              </div>
              <div className="col-md-7">
                <label>1 Rooms</label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-5">
                <label>Number Of Guest </label>
              </div>
              <div className="col-md-7">
                <label>{booking.totalAdults + booking.totalChildren} persons </label>              
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-5">
                <label>SpecialRequest </label>
              </div>
              <div className="col-md-7">
                <label>{booking.specialRequest} </label>              
              </div>
            </div>
            <div className="text-muted mt-1 ms-5">Thanks For Booking With Us!</div>
          </div>
         
        </div>
        )
        )
      }
     

      </div>
      </div>
 
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