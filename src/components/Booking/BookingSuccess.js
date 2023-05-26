import { Link } from "react-router-dom"
import classes from "./BookingSuccess.module.css"

const BookingSuccess = () => {
    
  return (
    <div className="container text-center" >
   <div className={classes.card}>
    <div className="text-center">
    <i class="fa fa-check-circle text-success fa-5x mt-5 " ></i>
    </div>
    <div className="text-center mt-3">You Successfully Created Your Booking</div>
    <div className="text-center mt-3 text-muted">
        <label>To See Your Booking</label>
        <Link to="/find-your-booking" className="text-success">clickhere</Link>       
    </div>
    
    <Link className="btn btn mt-5" to="/"><i class='fas fa-home '></i>GO TO Home
     </Link>
    
     </div>
     </div>
     
  )
}

export default BookingSuccess