import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllBookingRoom, getAllBookingRooms, getBookingRoomError, getBookingRoomStatus } from './bookingRoomSlice'
import BookingRoomItem from './BookingRoomItem'

const BookingRoomList = () => {

    const bookingRooms = useSelector(getAllBookingRooms)
    console.log("Booking room list: "+bookingRooms)
    const bookingRoomStatus = useSelector(getBookingRoomStatus)
    const bookingRoomError = useSelector(getBookingRoomError)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllBookingRoom())
    },[dispatch])
    let content;
    let index = 1;

    if(bookingRoomStatus === 'loading'){
        content = (<p>Loading....</p>)
    }

    if(bookingRoomStatus === 'succeeded'){
        content = bookingRooms.map(
            (bkRoom) => (
                <BookingRoomItem
                    key = {bkRoom.id}
                    no = {index++}
                    id = {bkRoom.id}
                    checkIn = {bkRoom.checkIn}
                    checkOut = {bkRoom.checkOut}
                    status = {bkRoom.status}
                />
            )
        )
    }

    if(bookingRoomStatus === 'failed'){
        content = <p>{bookingRoomError}</p>
    }
    console.log("RoomStatus in roomList:"+bookingRoomStatus)
  return content;
}

export default BookingRoomList