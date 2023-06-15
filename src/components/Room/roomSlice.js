import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const CREATE_ROOM = "http://localhost:8181/api/room/create/"
const GET_ALL_ROOM = "http://localhost:8181/api/room/all"
const DELETE_ROOM = "http://localhost:8181/api/room/delete/"
const UPDATE_ROOM = "http://localhost:8181/api/room/update/"

export const addNewRoom = createAsyncThunk('room/addRoom', async (data) => {
    console.log("Create room in slice:"+data.roomTypeId)
    const response = await axios.post(`${CREATE_ROOM}${data.roomTypeId}`, data.room)
    console.log("Create SLice: "+response.data)
    return response.data
})

export const fetchAllRoom = createAsyncThunk('room/fetchRooms', async () => {
    const response = await axios.get(GET_ALL_ROOM)
    return response.data
})


export const updateRoom = createAsyncThunk('room/updateRoom', async(data) => {
    console.log("In roomupdate slice: "+data.roomTypeId)
    const response = await axios.post(`${UPDATE_ROOM}${data.roomTypeId}`,data.room)
    return response.data
})

export const deleteRoom = createAsyncThunk('room/deleteRoom', async(data) => {
    await axios.delete(`${DELETE_ROOM}${data.id}`)
    const response = await axios.get(GET_ALL_ROOM)
    return response.data
})


const initialState = {
    rooms: [],
    filteredRooms : [],
    filteredDate :{},
    status: 'idle',
    error: null,
   
}

export const roomSlice = createSlice({

    name: "rooms",
    initialState,
    reducers:{
        setSelected : (state,action) => {
            const room = state.rooms.find(room => room.id === Number(action.payload))
            room.selected = true
        },
        setCancel : (state,action) => {
            const room = state.rooms.find(room => room.id === Number(action.payload))
            room.selected = false
        },
        addFilteredRoom : (state,action) => {
            state.filteredRooms = action.payload
            console.log("filtered rooms:"+state.filteredRooms)
        },
        setDate: (state,action) => {
            state.filteredDate = action.payload
            console.log("Filter Date:" +state.filteredDate)
        }

    },
    extraReducers(builder){
        builder
            .addCase(addNewRoom.fulfilled, (state,action) => {
                state.rooms.push(action.payload)
            })
            .addCase(fetchAllRoom.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllRoom.fulfilled, (state,action) => {
                state.status = 'succeeded'
                // state.rooms = action.payload
                const rooms = action.payload;
                const updatedRooms= rooms.map(room => {
                  return {
                    ...room,
                    selected : false,
                  }
                })
                console.log("fetchAllroom:"+updatedRooms)
                state.rooms = updatedRooms
            })
            .addCase(fetchAllRoom.rejected, (state,action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteRoom.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.rooms = action.payload
            })
            .addCase(updateRoom.fulfilled,(state,action) => {
                const room = action.payload

                const rooms = state.rooms.filter(rm => rm.id !== room.id)

                state.rooms = [room,...rooms]

            })
    }      

    
})

export const getAllRoom = (state) => state.rooms.rooms
export const getRoomStatus = (state) => state.rooms.status
export const getRoomError = (state) => state.rooms.error
export const getFilteredRoom = (state) => state.rooms.filteredRooms
export const getFilteredDate = (state) => state.rooms.filteredDate
export const selectRoomById = (state, roomId) => state.rooms.rooms.find(room => room.id === roomId)
export const selectRoomBYType = (state, roomTId) => state.rooms.rooms.filter(room => room.roomType.id === (roomTId))

export const search = (state,searchData) => state.rooms.rooms.filter(room => room.bookingRoom.checkIn !== searchData.checkIn && room.bookingRoom.checkOut !== searchData.checkOut && room.roomType.name === searchData.name )

// export const search = (state,roomType) => state.rooms.rooms.filter(room => room.roomType.name === roomType)

export const { setSelected, setCancel, addFilteredRoom, setDate } = roomSlice.actions;
export const findRoomByselected = (state) => state.rooms.rooms.filter(room =>room.selected === true)

export default roomSlice.reducer