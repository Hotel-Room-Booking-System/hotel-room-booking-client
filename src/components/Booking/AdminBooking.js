import React from "react";

const AdminBooking = (props) => {

    

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.guestName}</td>
      <td>{props.nrc}</td>
      <td>{props.phone}</td>
      <td>{props.countryOfOrigin}</td>
      <td>{props.totalChildren}</td>
      <td>{props.specialRequest}</td>
      <td>{props.createdAt}</td>
      
    </tr>
  );
};

export default AdminBooking
