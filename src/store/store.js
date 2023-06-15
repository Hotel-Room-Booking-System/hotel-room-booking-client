import { configureStore } from "@reduxjs/toolkit"
import roomTypeReducer from "../components/RoomType/roomTypeSlice"
import roomReducer from "../components/Room/roomSlice"
import bookingReducer from "../components/Booking/bookingSlice"
import paymentReducer from "../components/Payment/paymentSlice"
import bookingRoomsReducer from "../components/BookingRoom/bookingRoomSlice"


export const store = configureStore({
    reducer:{

        rooms:roomReducer,
        roomTypes:roomTypeReducer,
        bookings: bookingReducer,
        bookingRooms: bookingRoomsReducer,
        payments : paymentReducer,
       
    }
})