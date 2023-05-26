import classes from "./Payment.module.css";
import kbzimg from "../images/kbz.png";
import Card from "../ui/Card";
import { Link } from "react-router-dom";
import SmallImg from "../pages/SmallImg";

const Payment = () => {
  const cardbody1 = `col-md-6 col-sm-12 mx-3 card ${classes.card2}`;
  const cardbody3 = `col-md-5 col-sm-12 mx-3 ${classes.card3}`;

  return (
    <section>
         
      <div className="container">
        <div className={classes.title}>
          <div className={classes.text2}>
            <h5 className={classes.text1}>
              Please Make Payment To Confirm Your Booking
            </h5>
          </div>
        </div>

        <div className={classes.position}>
          <div className="row">
            <div className={cardbody1}>
              <div className={classes.text}>
                <h4 className=" mt-3 medium">BELLAGIO</h4>
                <p className="text-muted medium">
                  No.55, Khatter Road, Mingalar Quarter, Aung Ban Township,
                  Kalaw District, Southern Shan State, Myanmar.
                </p>
              </div>
              <div className={classes.text}>
                <h4 className="text-muted mt-3 medium">Check In Info</h4>
                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Check-in</label>
                  </div>
                  <div className="col-7 ">
                    <label>May 24,2023.Wednesday</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Check-Out</label>
                  </div>
                  <div className="col-7 ">
                    <label>May 26,2023.Friday</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Rooms</label>
                  </div>
                  <div className="col-7 ">
                    <label>1 Rooms</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Number Of Guest</label>
                  </div>
                  <div className="col-7 ">
                    <label>2 Adults</label>
                  </div>
                </div>
              </div>
              <div className={classes.text}>
                <h4 className="text-muted mt-3 medium">Guest Information</h4>
                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Name</label>
                  </div>
                  <div className="col-7 ">
                    <label>Aung Phyo Hein</label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-5">
                    <label className="text-muted medium">Phone Number</label>
                  </div>
                  <div className="col-7 ">
                    <label>092016270</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5 mb-3">
                    <label className="text-muted medium">Email</label>
                  </div>
                  <div className="col-7 mb-3 ">
                    <label>aph7720@gmail.com</label>
                  </div>
                </div>
              </div>
              <div className={classes.text}>
                <h4 className="text-muted mt-3 medium">Room Selections</h4>
                <div className="mt-3 ml-2">
                  <SmallImg />
                </div>
              </div>
            </div>

            <div className={cardbody3}>
              <Card>
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div className='row'>
                        <div className="col-2 ">
                          <img className={classes.img} src={kbzimg} alt="" />
                        </div>
                        <div className="col-10 ">
                          <div className="d-flex">
                            <label className={classes.logo}>KBZ PAY</label>
                          </div>
                        </div>
                      </div>
                    </button>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className={classes.text}>
                        <div className="row">
                          <div className="col-7">
                            <div>Subtotal</div>
                          </div>
                          <div className="col-5">
                            <label>50000</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-7">
                            <div>Taxes</div>
                          </div>
                          <div className="col-5">
                            <label>-</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-7">
                            <div>Total</div>
                          </div>
                          <div className="col-5">
                            <label>50000</label>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="btn btn-success mt-5 mb-3 col-md-12"
                        to="/deposite"
                      >
                        {" "}
                        Purchase
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
