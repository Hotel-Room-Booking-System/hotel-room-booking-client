import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllPayments, getAllPayments, getPaymentError, getPaymentStatus } from './paymentSlice';
import UserPayment from './UserPayment';

const UserPaymentList = () => {
    const paymentList = useSelector(getAllPayments);
    console.log("USERPAYMENTList: " + paymentList);
  
    const paymentStatus = useSelector(getPaymentStatus);
  
    const paymentError = useSelector(getPaymentError);
  
    const dispatch = useDispatch();
    useEffect(() => {
      if (paymentStatus === "idle") {
        dispatch(fetchAllPayments());
      }
    }, [paymentStatus, dispatch]);
  
    let content;
  
    if (paymentStatus === "loading") {
      content = <p>Loading.....</p>;
    }
  
    if (paymentStatus === "succeeded") {
      content =
      paymentList.map((payment) => (
       
        <UserPayment
          id={payment.id}
          holderName={payment.holderName}
          cardNo={payment.cardNo}
          total={payment.total}
          cvc={payment.cvc}
          cardType={payment.cardType}
        />
      ))
    
     
    }
  
    if (paymentStatus === "failed") {
      content = <p>{paymentError}</p>;
    }
  
    console.log("PaymentStatus: " + paymentStatus);
   
    return (
      
content
     
    );
  };

export default UserPaymentList