import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllRoom,
  findRoomByselected,
} from "./roomSlice";
import { selectRoomTypeById } from "../RoomType/roomTypeSlice";
import SelectedRoomItem from "./SelectedRoomItem";
import { Link } from "react-router-dom";

const SelectedRoom = () => {
  

  const selectedRooms = useSelector(findRoomByselected);
  console.log("SelectedRoom component: " + selectedRooms);
  // const roomTypeId = selectedRooms.roomTypeId;
  // const roomtype = useSelector((state) => selectRoomTypeById(state, Number(roomTypeId)) );

  

  let content;
  if (selectedRooms.length === 0) {
    content = <p className="text-center my-4">If you want to book a room, you must select a room.</p>;
  } else {
    content = (
      <>
      <h4 className="card-title my-2">Selected rooms</h4>
      {selectedRooms.map((room) => (
      
    <SelectedRoomItem 
    id = {room.id}
    image1 = {room.image1}
    roomType = {room.roomType.name}
    price = {room.roomType.price}
    />
    ))}
    </>
    )
  }

  return (
    <div className="card px-3">
   
      {content}
      <div className="row text-center">
        <Link to="/form">
        <button className="btn btn-primary mb-2">Proceed To Guest Info</button>
        </Link>
      </div>
    </div>
    
    );
  // return <p>Select Room</p>
};

export default SelectedRoom;
