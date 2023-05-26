import view1 from "../images/view1.jpg";
import view2 from "../images/dview2.jpg";
import view4 from "../images/dview4.jpg";
import classes from "./RoomDetail.module.css"
import ARoom from "./ARoom";
import SelectedRoom from "./SelectedRoom";


const RoomDetail = () => {

const modal = `card ${classes.modal}`
const card = `card mb-3 ${classes.card3}`;
//  const cardBody = `card-body ${classes.cardBody}`;
 const submit = `form-control ${classes.submit}`

  return (
    <>
    <section>
      <div className={modal}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={view1} alt=".." className="w-100" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={view2} alt=".." className="w-100" />
              </div>
           
              <div className="col-sm-12 col-md-6">
                <img src={view4} alt=".." className="w-100" />
              </div>
            </div>
            <div className="row mt-2">
            <h4>Amenities</h4>
              <div className="col-sm-12 col-md-6">
                <ul>
                  <li>Car Parking</li>
                  <li>Free Wifi</li>
                  <li>Laundry Service</li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6">
               <ul>
                <li>Concierge</li>
                <li>Front Desk</li>
                <li>Security Guard</li>
               </ul>
              </div>
            </div>
            
          </div>
         
        </div>
      </div>
    </section>
    <div className={classes.modal}>
    <h4 className="ms-2">Search rooms and see the prices</h4>
    <div class={card}>
    <form>
  <div class="row g-0 p-5">
  <div className="form-group col-md-3 col-sm-6 px-2">
        <label className="form-check-label" for="check-in">Check-In</label>
          <input  type="date" className="form-control clickable input-md" id="DtChkIn" placeholder="&#xf133;  Check-In"/>
        </div>
        <div className="form-group col-md-3 col-sm-6 px-2">
        <label className="form-check-label" for="check-out">Check-Out</label>
          <input type="date" className="form-control clickable input-md" id="DtChkOut" placeholder="&#xf133;  Check-Out"/>
        </div>
        <div className="form-group col-md-3 col-sm-6 pt-4 px-2">
          <input  type="number" className="form-control clickable input-md" id="room" placeholder="Number of Room"/>
        </div>
       
          <div className="form=group col-md-3 col-sm-6 pt-4 px-2">
          <input id="submit" type="submit" className={submit}  value="Search Room"/>
        </div>
  </div>
  </form>
</div>
    </div>
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
  );
};

export default RoomDetail;
