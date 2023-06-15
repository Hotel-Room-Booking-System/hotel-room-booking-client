import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";

import AdminPayment from "./AdminPayment";
import { fetchAllPayments, getAllPayments, getPaymentError, getPaymentStatus } from "./paymentSlice";

const Paymentlist = (props) => {
  const paymentList = useSelector(getAllPayments);
  console.log("List: " + paymentList);

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
    content = paymentList.map((payment) => (
      <AdminPayment
        id={payment.id}
        holderName={payment.holderName}
        cardNo={payment.cardNo}
        total={payment.total}
        cvc={payment.cvc}
        cardType={payment.cardType}
      />
    ));
  }

  if (paymentStatus === "failed") {
    content = <p>{paymentError}</p>;
  }

  console.log("PaymentStatus: " + paymentStatus);

  return content;
};

export default Paymentlist;
