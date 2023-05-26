import classes from "./FindYourBooking.module.css"
import bannerImg from "../images/hotel2.jpg"


const FindYourBooking = () => {
  return (
    <section className={classes.contact}>
       <img className={classes.img} src={bannerImg} alt="Hotel View"></img>
        <form className={classes.form}>
        <div>
           <div> 
             <h2 className="text-light">Find My Booking </h2>
           </div>
           <div className="mb-5">
            <span className="text-secondary">Please enter the phone number or email associated with the booking you are looking for.</span>
           </div>
        </div>
          <div></div>
          <div className="row" >
            <div className="col-md-10">
            <label className="form-label" ><h6>Your Phone Number or Email</h6></label>
            <input type="text" className="form-control"></input>
            </div>
         
          </div>
          <div className={classes.space}>
            <div className={classes.actions}>
              <button className="btn btn-primary" >Proceed To Find</button>
             </div>
          </div>
          
        </form>
       
    </section>
  )
}

export default FindYourBooking