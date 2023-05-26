import classes from "./Deposite.module.css";
import kbzimg from "../images/kbz.png";
import BookingSuccess from "../Booking/BookingSuccess";
import { useState } from "react";
import BackDrop from "../pages/BackDrop";

const Deposite = () => {
  const cardbody1 = `${classes.card}`;
  const cardbody2 = ` text-center ${classes.smallcard}`;
  const text2 = `text-center`;

  const [isBookingsuccess,setBookingsuccess]= useState(false)

  function successHandler(e){
    e.preventDefault()
    setBookingsuccess(true)
  }

  function closeHandler(){
    setBookingsuccess(false);
  }
console.log("setBookingsuccess"+isBookingsuccess)
  
  return (
    <section>
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <div className={cardbody1}>
        <div className="row ">
                        <div className="col-2">
                          <img className={classes.img} src={kbzimg} alt="" />
                        </div>
                        <div className="col-10 mt-3">
                          <div className="d-flex">
                            <label className={classes.header}>PAY WITH KBZ PAY</label>
                          </div>
                        </div>
                      </div>
          <div>
            <div className={text2}>
              <small class="text-muted ">Amount Due</small>

              <div>
                <h1 className={classes.text}>50000</h1>
              </div>
            </div>
          </div>
          <div className={cardbody2}>
            <form>
              <div className="form-group">
              <label className="d-flex flex-row justify-content-between ">
                <h6><b>Name</b></h6>
                <div>
                  <small class="ml-auto text-muted">(required)</small>
                </div>
              </label>
              <input type="text" className="form-control"></input>
              <div className="mt-4">
                <label className="d-flex flex-row justify-content-between">
                  <h6><b>Card Number</b></h6>
                  <div>
                    <small class="ml-auto text-muted">(required)</small>
                  </div>
                </label>
                <input type="text" className="form-control"></input>
              </div>
              <div className="mt-3">
                <label className=" d-flex flex-row justify-content-between">
                  <h6><b>CVC</b> </h6>
                  <div>
                    <small class="ml-auto text-muted">(required)</small>
                  </div>
                </label>
                <input type="text" className="form-control"></input>
              </div>
          
                <button type="submit" className="btn btn-success mt-4 mb-2 " onClick={successHandler}>Deposite</button>
                {isBookingsuccess && <BookingSuccess/>}
                {isBookingsuccess && <BackDrop onDrop={closeHandler}/>}
              
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Deposite;
