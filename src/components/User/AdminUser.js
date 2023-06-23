import { fetchAllUsers } from "./userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminUser = (props) => {
    

  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.firstname} {props.lastname }</td>
      <td>{props.username}</td>
      <td>{props.phone}</td>
      <td>{props.createdAt}</td>
      <td>{props.updatedAt}</td>
    </tr>
  );
};

export default AdminUser;
