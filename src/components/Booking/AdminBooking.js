import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingDetails from "../tables/BookingDetails";
import BackDrop from "../pages/BackDrop";

const AdminBooking = (props) => {

  const [isModalOpen,setModalOpen]= useState(false)
  
 
 

  // useEffect(()=>{
  //   dispatch(fetchRoomType())
  //   dispatch(fetchAllRoom())
  // },[/*dispatch*/])
  
  function detailHandler(){
    setModalOpen(true)
  }

  function closeHandler(){
    setModalOpen(false);
  
  }

  console.log("is Modal open"+isModalOpen)
    

  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.guestName}</td>
      <td>{props.nrc}</td>
      <td>{props.phone}</td>
      <td>
      <Link  onClick={detailHandler}>View more..</Link>
        {isModalOpen && <BookingDetails 
                id = {props.id}
                />}
                {isModalOpen && <BackDrop onDrop={closeHandler}/>}
      </td>
      {/* <td>{props.totalAdults}</td>
      <td>{props.totalChildren}</td>
      <td>{props.specialRequest}</td>
      <td>{props.createdAt}</td> */}
      
    </tr>
  );
};

export default AdminBooking
