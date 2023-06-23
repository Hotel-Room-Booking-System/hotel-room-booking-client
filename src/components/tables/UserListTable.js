import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchAllUsers } from "../User/userSlice";
import UserList from "../User/UserList";

const UserListTable = () => {
    const dispatch = useDispatch()
  useEffect(() => {
     
          dispatch(fetchAllUsers())
      
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
        <h3>User Information</h3>
    </div>
     
    <div className="container">
         
        <table id="example" class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone </th>
            <th>Registration Date</th>
            <th>Updated Date</th>
          </tr>
        </thead>
        <tbody>
        <UserList/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default UserListTable