import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom, selectRoomById } from './roomSlice'
import { Link } from 'react-router-dom'
import ConfirmModal from '../ui/ConfirmModal'
import { fetchRoomType, selectRoomTypeById } from '../RoomType/roomTypeSlice'

const RoomItem = (props) => {

  const dispatch = useDispatch()
    const roomTId = props.roomTypeId;
    const roomType = useSelector((state)=>selectRoomTypeById(state,Number(roomTId)))

    
 
    console.log("In the roomItem with roomType: "+roomTId )

    // const typeName = roomType.name
    // console.log("In the roomItem with name: "+typeName )

    
    const [isModalOpen,setModalOpen] = useState(false)

    function closeHandler(){
        setModalOpen(false)
    }

    function confirmHandler(){
        dispatch(deleteRoom({id:props.id})).unwrap()
        setModalOpen(false)
     }
    function deleteHandler(){
        setModalOpen(true)
     }
  return (
    <tr>
    <td>{props.no}</td>
    <td>{String(props.roomType.name)}</td>
    <td><img src={props.image1} className="image fluid" width="100px" height="100px"/></td>
    <td><img src={props.image2} className="image fluid" width="100px" height="100px"/></td>
    <td><img src={props.image3} className="image fluid" width="100px" height="100px"/></td>
    <td>{props.description}</td>
    <td>
      <Link to={`/admin/roomTable/updateroom/${props.id}`}>
        
        <i class="far fa-edit fa-1x text-success mx-4"></i>
      </Link>
      <Link onClick={deleteHandler}>
     
        <i class="far fa-trash-alt fa-1x"></i>
      </Link>
      {isModalOpen && (
        <ConfirmModal onCancel={closeHandler} onConfirm={confirmHandler} />
      )}
    </td>
  </tr>
  )
}

export default RoomItem