import { useState } from "react";
import view1 from "../images/view1.jpg";
import classes from "./ARoom.module.css";
import { Link } from "react-router-dom";
import Facilities from "../RoomType/Facilities";
import BackDrop from "../pages/BackDrop";
import RoomView from "./RoomView";

const ARoom = () => {
  const card1 = `card ${classes.card2}`;
  const [isModalOpen,setModalOpen]= useState(false)
  const [isImageOpen, setImageOpen] = useState(false)

  function detailHandler(){
    setModalOpen(true)
  }

  function closeHandler(){
    setModalOpen(false);
    setImageOpen(false)
  }

  
  function imageHandler(){
    setImageOpen(true)
  }


  return (
          <div className={card1}>
            <div className="card-header">
              <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={view1} onClick={imageHandler} className="mx-2 w-100" alt="...." />
                {isImageOpen && <RoomView />}
                {isImageOpen && <BackDrop onDrop={closeHandler}/>}
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="pt-3 d-block me-5">Garden View Suite</p>
                <Link to="/" onClick={detailHandler}>
                  <small >More Detail</small>
                </Link>
                {isModalOpen && <Facilities />}
                {isModalOpen && <BackDrop onDrop={closeHandler}/>}
              </div>
              </div>
            </div>
            <div className="card-body d-flex">
              <div className="mx-5">
                <small>1 Double / Twin Bed</small>
                <br />
                <small>You can add extra bed.</small>
                <br />
                <small>2 Adult(s) Under 5 years stays free</small>
              </div>
              <div className="ms-5 ml-5">
                <p className=" mx-3">MMK...</p>
                <small className="mx-3">2 Nights * 12000 Avg</small>
                <Link to="/login">
                <button className="btn btn-success mt-2 mx-3">Book</button>
                </Link>
              </div>
            </div>
            <hr></hr>
            
            <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Room Detail
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              <h6>Descriptions</h6>
                <small>* Room rates include Breakfast + Hi Tea. * Generator Operations Hours --- When EPC outage, Generator will be operated. * 12;00 in the afternoon to 15:00 pm. * 18:00 pm to 06:00 am. * Water park Operations Hours -- (09:00 am to 10:30 am) (16:00 pm to 17:30).</small>
              </div>
            </div>
          </div>
          </div>
            </div>
         
   
  );
};

export default ARoom;
