import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminBooking from "./AdminBooking";
import {  fetchBooking, getAllBookings, getBookingError, getBookingStatus } from "./bookingSlice";


const Bookinglist = (props) => {
  const bookingList = useSelector(getAllBookings);
  console.log("List: " + bookingList);

  const bookingStatus = useSelector(getBookingStatus);

  const bookingError = useSelector(getBookingError);

  const dispatch = useDispatch();
  useEffect(() => {
    if (bookingStatus === "idle") {
      dispatch(fetchBooking());
    }
  }, [dispatch]);

  let content;
  let index=1;
   

  if (bookingStatus === "loading") {
    content = <p>Loading.....</p>;
  }

  if (bookingStatus === "succeeded") {
    content = bookingList.map((booking) => (
      <AdminBooking
        no ={index++}
        id={booking.id}
        guestName={booking.guestName}
        nrc={booking.nrc}
        phone={booking.phone}
        countryOfOrigin={booking.countryOfOrigin}
        totalAdults={booking.totalAdults}
        totalChildren={booking.totalChildren}
        specialRequest={booking.specialRequest}
        createdAt={booking.createdAt}
      />
    ));
  }

  if (bookingStatus === "failed") {
    content = <p>{bookingError}</p>;
  }

  console.log("BookingStatus: " + bookingStatus);

  return content;
};

export default Bookinglist;
