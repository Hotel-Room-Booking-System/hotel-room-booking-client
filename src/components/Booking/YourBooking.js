import Card from "../ui/Card";
import classes from "./YourBooking.module.css";
import SmallImg from "../pages/SmallImg";

const YourBooking = () => {
    const cardbody3 = `col-md-12 col-sm-12 mx-3  ${classes.card3}`;
  return (
    <section>
     <img src="https://c4.wallpaperflare.com/wallpaper/952/263/731/ocean-underwater-wallpaper-preview.jpg"
     className="bookingImg" alt=""/>
    <div className={cardbody3}>
      <div className="card mx-5">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Aung Phyo Hein
            </button>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="row">
                <div className="col-7">
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
                        <label className="text-muted medium">
                          Number Of Guest
                        </label>
                      </div>
                      <div className="col-7 ">
                        <label>2 Adults</label>
                      </div>
                    </div>
                  </div>
                  <div className={classes.text}>
                    <h4 className="text-muted mt-3 medium">
                      Guest Information
                    </h4>
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
                        <label className="text-muted medium">
                          Phone Number
                        </label>
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
                </div>
                <div className="col-5 mt-3">
                <h4 className="text-muted mt-3 medium">Room Selections</h4>
                <div className="mt-3 ml-2">
             <SmallImg/>
             </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default YourBooking