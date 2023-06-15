import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const GET_ALL_RoomType = "http://localhost:8181/api/roomType/all"
const ADD_ROOMTYPE = "http://localhost:8181/api/roomType/create"
const UPDATE_ROOMTYPE = "http://localhost:8181/api/roomType/update"
const DELETE_ROOMTYPE = "http://localhost:8181/api/roomType/delete/"

export const fetchRoomType = createAsyncThunk('roomType/fetchRoomType',async() =>{
    const response = await axios.get(GET_ALL_RoomType)
    return response.data
})

export const addNewRoomType = createAsyncThunk('roomType/addRoomType', async(data)=>{

    const response = await axios.post(ADD_ROOMTYPE,data.roomType)
       
    return response.data;
})

export const updateRoomType = createAsyncThunk('roomType/updateRoomType', async(data) => {
    console.log("Update RoomType: "+data.roomType)
    const response = await axios.post(UPDATE_ROOMTYPE,data.roomType)
    return response.data;
})

export const deleteRoomType = createAsyncThunk('roomType/deleteRoomType', async(data) => {
    console.log("DELETE:"+data.id)
   
       await axios.delete(`${DELETE_ROOMTYPE}${data.id}`)
    const response = await axios.get(GET_ALL_RoomType)
    return response.data
})

const initialState = {
    roomTypes: [],
    status: 'idle',
    error: null
}



export const roomTypeSlice = createSlice({

    name:"roomTypes",
    initialState,
    reducers:{
     
    },
    extraReducers(builder){
        builder
            .addCase(fetchRoomType.pending, (state,action) =>{
                state.status = 'loading'
            })
            .addCase(fetchRoomType.fulfilled, (state,action) => {
                state.status = 'succeeded'
                state.roomTypes = action.payload
            })
            .addCase(fetchRoomType.rejected, (state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewRoomType.fulfilled,(state,action)=>{
                state.roomTypes.push(action.payload)
            })
            .addCase(updateRoomType.fulfilled, (state, action) => {

                const roomType = action.payload
                
                
                const roomTypes = state.roomTypes.filter( rt => rt.id !== roomType.id)

                state.roomTypes = [roomType, ...roomTypes]


            })
            .addCase(deleteRoomType.fulfilled, (state, action) => {
                    state.status = 'succeeded';
                    state.roomTypes = action.payload
        
            })
            
            
    }
})

export const getAllRoomType = (state) => state.roomTypes.roomTypes
export const getRoomTypeStatus = (state) => state.roomTypes.status
export const getRoomTypeError = (state) => state.roomTypes.error
export const selectRoomTypeById = (state, roomTpyeId) => state.roomTypes.roomTypes.find(roomType => roomType.id === roomTpyeId)

export const { addRoomType } = roomTypeSlice.actions;

export default roomTypeSlice.reducer