import React, { useEffect } from 'react'

//jQuery libraries
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

import { fetchAllPayments } from './paymentSlice';
import { useDispatch } from 'react-redux';

import Paymentlist from './PaymentList';

const PaymentShow = () => {

  // const roomTypeList = useSelector(getAllRoomType)
 
  // console.log("Room Type List: "+roomTypeList)

  
  const dispatch = useDispatch()
  useEffect(() => {
     
          dispatch(fetchAllPayments())
      
  },[dispatch]
  )

  $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});
  
  return (
    <div className="MainDiv">
    <div class=" text-center">
        <h3>Payment List</h3>
    </div>
     
    <div className="container">
         
    <table id="example" class="table table-hover table-bordered">

        <thead>
          <tr>
            <th>ID</th>
            <th>Holdr Name</th>
            <th>Card Number</th>
            <th>Total</th>
            <th>CvC</th>
            <th>Card Type</th>
          </tr>
        </thead>
        <tbody>
        <Paymentlist/>
           
        </tbody>
      </table>
         
      </div>
    </div>
  )
}

export default PaymentShow