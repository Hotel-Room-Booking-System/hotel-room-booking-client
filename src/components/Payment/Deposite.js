import classes from "./Deposite.module.css";
import kbzimg from "../images/kbz.png";
import BookingSuccess from "./BookingSuccess";
import { useState } from "react";
import BackDrop from "../pages/BackDrop";
import { useDispatch } from "react-redux";
import { register } from "./paymentSlice";

const Deposite = () => {
 const total = 50000;
  const [holderName, setHoldername] = useState();
  const [cardNo, setCardnumber] = useState();
  const [cvc, setCvc] = useState();
  const [cardType, setCardtype] = useState();
  const [registerRequestStatus, setRegisterRequestStatus] = useState("idle");
  
  const onHoldernameChange = (e) => setHoldername(e.target.value);
  const onCardNumberChange = (e) => setCardnumber(e.target.value);
  const onCVCChange = (e) => setCvc(e.target.value);
  const onCardTypeChange = (e) => setCardtype(e.target.value);

  const canCreate =
    [total,holderName, cardNo, cvc, cardType].every(Boolean) &&
    registerRequestStatus === "idle";

  const dispatch = useDispatch();

  const cardbody1 = `${classes.card}`;
  const cardbody2 = ` text-center ${classes.smallcard}`;
  const text2 = `text-center`;

  const [isBookingsuccess, setBookingsuccess] = useState(false);

  function successHandler(e) {
    e.preventDefault();
    if (canCreate) {
      setRegisterRequestStatus("pending");

      try {
        dispatch(
          register({
            total,
            holderName,
            cardNo,
            cvc,
            cardType,
          })
        ).unwrap();
        setHoldername("");
        setCardnumber("");
        setCvc("");
        setCardtype("");

        setBookingsuccess(true);
      } catch (error) {
        console.log(error);
      } finally {
        setRegisterRequestStatus("idle");
      }
    }
  }

  function closeHandler() {
    setBookingsuccess(false);
  }
  console.log("setBookingsuccess" + isBookingsuccess);

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
                  <h1 className={classes.text} >{total}</h1>
                </div>
              </div>
            </div>
            <div className={cardbody2}>
              <form>
                <div className="form-group">
                  <label className="d-flex flex-row justify-content-between ">
                    <h6>
                      <b>Holdername</b>
                    </h6>
                    <div>
                      <small class="ml-auto text-muted">(required)</small>
                    </div>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="holderName"
                    onChange={onHoldernameChange}
                    value={holderName}
                  />
                  <div className="mt-4">
                    <label
                      className="d-flex flex-row justify-content-between"
                      htmlFor="cardNo"
                    >
                      <h6>
                        <b>Card Number</b>
                      </h6>
                      <div>
                        <small class="ml-auto text-muted">(required)</small>
                      </div>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cardNo"
                      onChange={onCardNumberChange}
                      value={cardNo}
                    />
                  </div>
                  <div className="mt-3">
                    <label className=" d-flex flex-row justify-content-between">
                      <h6>
                        <b>CVC</b>{" "}
                      </h6>
                      <div>
                        <small class="ml-auto text-muted">(required)</small>
                      </div>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cvc"
                      onChange={onCVCChange}
                      value={cvc}
                    />
                  </div>
                  <div className="mt-3">
                    <label className=" d-flex flex-row justify-content-between">
                      <h6>
                        <b>Card Type</b>{" "}
                      </h6>
                      <div>
                        <small class="ml-auto text-muted">(required)</small>
                      </div>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardType"
                      onChange={onCardTypeChange}
                      value={cardType}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success mt-4 mb-2 "
                    onClick={successHandler}
                    disabled={!canCreate}
                  >
                    Deposite
                  </button>
                  {isBookingsuccess && <BookingSuccess />}
                  {isBookingsuccess && <BackDrop onDrop={closeHandler} />}
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
