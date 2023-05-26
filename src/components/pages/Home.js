import bannerImg from "../images/island.jpg"
import ARoom from "../Room/ARoom";
import classes from "./Home.module.css"
import Room from "../Room/Room";
import SearchBar from "./SearchBar";
import SelectedRoom from "../Room/SelectedRoom";


const Home = () => {

 const message = `text-light ${classes.message}` 
 

  return (
    <>
    <section>
  <img className={classes.banner} alt="Hotel view" src={bannerImg}/>
  <h3 className={message}>Book Your Stay Without Hassle</h3>
    <SearchBar/>
    <Room/>
</section>
 <section>
    <div className="row mt-3">
        <div className="col-sm-12 col-md-7">
        <ARoom/>
        </div>
        <div className="col-sm-12 col-md-4 mt-4">
        <SelectedRoom/>
        </div>
    </div>
    </section>
        
</>
  )
}

export default Home