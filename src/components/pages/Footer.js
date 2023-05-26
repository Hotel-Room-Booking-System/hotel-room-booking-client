import { Link } from "react-router-dom"
import classes from "./Footer.module.css"

const Footer = () => {
    const footer = `row ${classes.footer}`
   
  return (
    <section className={classes.last}>
    
        <div className={footer}>
            <div className="col-md-4 col-sm-12">
                <h6>ABOUT SHWEBOOKING</h6>
                <Link to="contact-us"><p>Contact Us</p></Link>
                <Link to="/find-your-booking"><p>Find/Print Your Booking</p></Link>
            <Link to="/frequently-asked-questions"><p>FAQs</p></Link>

            </div>
            <div className="col-md-4 col-sm-12">
            <h6>HELP</h6>
          
           
            </div>
            <div className="col-md-4 col-sm-12">
           <h6>WE ACCEPT</h6>
            </div>
        </div>
    </section>
  )
}

export default Footer