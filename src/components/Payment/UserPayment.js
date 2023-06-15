import React, { useState } from "react";
import ConfirmModal from "../ui/ConfirmModal";
import classes from "./PaymentUser.module.css";
import { Link } from "react-router-dom";
const UserPayment = (props) => {
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
      <div className="container">
        <div className={classes.plan}>
          <div class={classes.inner}>
            <p class={classes.title}>{props.holderName}</p>
            <h6 class={classes.info}>{props.cardType}</h6>
            <ul class={classes.features}>
              <li>
                <span class={classes.icon}>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="currentColor"
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <strong>Total </strong>
                  {props.total} MMK
                </span>
              </li>
              <li>
                <span class={classes.icon}>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="currentColor"
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    ></path>
                  </svg>
                </span>
                <strong>CVC </strong>
                <span>{props.cvc}</span>
              </li>
              <li>
                <span class={classes.icon}>
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="currentColor"
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <strong>Card Number </strong>
                  {props.cardNo}
                </span>
              </li>
            </ul>
            <div class={classes.action}>
              <Link class={classes.button} onClick={deleteHandler}>
                Delete
              </Link>
              {isDeleteModal && (
                <ConfirmModal
                  onCancel={closeHandler}
                  onConfirm={confirmHandler}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{isPaymentModal && <PaymentInfo />}</>;
};

export default UserPayment;


