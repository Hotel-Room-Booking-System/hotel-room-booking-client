import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const CREATE_BOOKING_ROOM = "http://localhost:8181/api/bookingRoom/create/"
const GET_ALL_BOOKING_ROOM = "http://localhost:8181/api/bookingRoom/all"
const DELETE_BOOKING_ROOM = "http://localhost:8181/api/bookingRoom/delete/"

export const fetchAllBookingRoom =  createAsyncThunk('bookingRoom/fetchBookingRoom',async()=>{
    const response = await axios.get(GET_ALL_BOOKING_ROOM)
    return response.data
})

export const addBookingRoom = createAsyncThunk('bookingRoom/addBookingRoom', async(data) => {
    console.log("Booking room slice:"+data)
    console.log("add bookroomslice:"+data.selectedRooms.length+".....bk room"+data.bookingRoom)
    let content;
    let roomId;
   
    const bkRoom = data.bookingRoom
    const selectedRooms = data.selectedRooms
    content = selectedRooms.map((room) =>
       roomId = room.id,
       
      )
      console.log("Content: "+content)

      console.log("Length:"+selectedRooms.length)
    
    //   for(i;i<selectedRooms.length;i++){

    //     response = await axios.post(`${CREATE_BOOKING_ROOM}${data.bookingId}/${selectedRooms[i].id}`,bkRoom)
    //     console.log("Response;"+ i+"times"+response.data)
    //     return response.data
    //   }

    const responses = [];

  for (let i = 0; i < selectedRooms.length; i++) {
    try {
      const response = await axios.post(
        `${CREATE_BOOKING_ROOM}${data.bookingId}/${selectedRooms[i].id}`,
        bkRoom
      );
      console.log(`Response ${i + 1}:`, response.data);
      responses.push(response.data);
    } catch (error) {
      console.error(`Error ${i + 1}:`, error);
      // Handle the error if needed
    }
  }

  return responses;
     
      console.log("Room Id:"+roomId)
    // const bookingRoom = {bkRoom , selectedRooms}
    // console.log("BookingRoom in slice:"+bookingRoom)
    
    
   
})


export const deleteBookingRoom = createAsyncThunk('bookingRoom/deleteBookingRoom', async(data) => {
    await axios.delete(`${DELETE_BOOKING_ROOM}${data.id}`)
    const response = await axios.delete(DELETE_BOOKING_ROOM)
    return response.data
})

const initialState = {
    bookingRooms: [],
    status: 'idle',
    error: null,
   
}

export const bookingRoomSlice = createSlice({
    name: "bookingRoom",
    initialState,
    reducers:{
       
    },
    extraReducers(builder){
        builder
            .addCase(addBookingRoom.fulfilled, (state,action) => {
                state.bookingRooms.push(action.payload)
            })
            .addCase(fetchAllBookingRoom.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBookingRoom.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.bookingRooms = action.payload
            })
            .addCase(fetchAllBookingRoom.rejected, (state,action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteBookingRoom.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.bookingRooms = action.payload
            })
    }
})

export const getAllBookingRooms = (state) => state.bookingRooms.bookingRooms
export const getBookingRoomStatus = (state) => state.bookingRooms.status
export const getBookingRoomError = (state) => state.bookingRooms.error
export const selectBookingRoomById = (state,bkRoomId) => state.bookingRooms.bookingRooms.find(bkroom => bkroom.id === bkRoomId)
export const selectBookingRoomByBkId = (state,bId) => state.bookingRooms.bookingRooms.filter(bkroom => bkroom.bookingId === bId)

export default bookingRoomSlice.reducer
  
 

    


