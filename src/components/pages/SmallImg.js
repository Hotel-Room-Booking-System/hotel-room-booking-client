import island from "../images/island.jpg"

const SmallImg = () => {
  return (
    <div>
      <div className="card mb-2">
        <div className="row no-gutters">
          <div class="col-4  h-100">
            <img src={island} alt="" className="card-img  ms-2 pt-1"></img>
          </div>
          <div class="col-8">
            <div class="d-flex">
              <div class="w-100 ml-2 mt-2">
                <small class="room-name-color">Sea View (2 pax)</small>
              </div>
            </div>
            <div class="ml-2 mb-2">
              <div>
                <small>
                  <div class="text-muted">Sleep - 2 Adult(s)</div>
                </small>
              </div>
              <div class="text-muted">
                <small>Under 5 years stays free</small>
              </div>
              <div>
                <small>2 Nights</small>
                <small class="font-weight-bold"> - 240,000 MMK</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallImg;
