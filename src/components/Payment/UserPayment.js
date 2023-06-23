import React, { useState } from "react";
import ConfirmModal from "../ui/ConfirmModal";
import classes from "./PaymentUser.module.css";
import { Link } from "react-router-dom";
const UserPayment = (props) => {
  const card = `card ${classes.first}`
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isPaymentModal, setPaymentModal] = useState(true);

  function deleteHandler() {
    console.log("hello delete");
    setDeleteModal(true);
  }
  function closeHandler() {
    setDeleteModal(false);
  }
  function confirmHandler() {
    // dispatch(deletePayment({ id: props.id })).unwrap();
    setDeleteModal(false);
    setPaymentModal(false);
  }
  function PaymentInfo() {
    return (
      <div class={card}>
      <div class="card-body mx-4">
        <div class="container">
          <p class="mx-2 text-center">Thank for your purchase</p>
          <div class="row">
            <ul class="list-unstyled">
              <li class="text-dark">{props.holderName}</li>
              <li class="text-muted mt-1"><span class="text-dark">{props.cardType}</span></li>
              <li class="text-dark mt-1">{props.booking.createdAt}</li>
            </ul>
            <hr/>
            <div class="col-xl-10">
              <p>Card Number</p>
            </div>
            <div class="col-xl-2">
              <p class="float-end">{props.cardNo}
              </p>
            </div>
            <hr/>
          </div>
          <div class="row">
            <div class="col-xl-10">
              <p>CVC</p>
            </div>
            <div class="col-xl-2">
              <p class="float-end">{props.cvc}
              </p>
            </div>
            <hr/>
          </div>
          <div class="row">
            <div class="col-xl-10">
              <p>Total</p>
            </div>
            <div class="col-xl-2">
              <p class="float-end">{props.total}MMK
              </p>
            </div>
            {/* <hr style={{border: "2px solid black"}}/> */}
          </div>
          {/* <div class="row text-black">
    
            <div class="col-xl-12">
              <p class="float-end fw-bold">Total: $10.00
              </p>
            </div>
            <hr style={{border: "2px solid black"}}/>
          </div> */}
          <div class="text-center mt-2">
         
          <div class={classes.action}>
              <Link class={classes.button} onClick={deleteHandler}>
                Delete
              </Link>
              {isDeleteModal && 
                <ConfirmModal
                  onCancel={closeHandler}
                  onConfirm={confirmHandler}
                />}
           
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  return <>{isPaymentModal && <PaymentInfo />}</>;
};

export default UserPayment;


