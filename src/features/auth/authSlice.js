import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const LOGIN_URL = 'http://localhost:8181/api/user/login'
const UPDATE_USER_URL = 'http://localhost:8181/api/user/update'

export const login = createAsyncThunk('auths/login',async (loginRequest) => {
    console.log(loginRequest)

    try {
        const response = await axios.post(LOGIN_URL,loginRequest)
        return response.data
    } catch (error) {
        console.error(error)
    }
})

export const updateUser = createAsyncThunk('users/updateUser', async(data) => {
    const response = await axios.put(UPDATE_USER_URL,data.user)
    
    return response.data;
})

const initialState = {
    user:{},
    roles:[],
    success:false,
    token:'',
}

const authSlice = createSlice({
    name : 'authSlice',
    initialState,
    reducers : {
        logout : (state) => {
            state.user = {}
            state.roles = []
            state.success = false
            state.token = ''
            localStorage.clear()
        },
        setToken : (state) => {
            const token = localStorage.getItem('token')
            if(token){
                state.token = token
            }else{
                state.token = ''
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(login.fulfilled,(state,action)=>{
                console.log(action.payload)
                if(action.payload?.token){
                    state.user = action.payload.user
                    state.roles = action.payload.roleList
                    state.success = action.payload.success
                    state.token = action.payload.token
                    localStorage.setItem('token',action.payload.token)
                   // console.log(state.user.firstname)
                }else{
                    console.log('login fail!')
                }
                
            })
            .addCase(updateUser.fulfilled, (state, action) => {

                const user = action.payload
                
                
                const users = state.user.filter( userlist => userlist.id !== user.id)

                state.user = [user, ...users]


            })

    }
    
})
//export const selectUserByIdFromAuth = (state, userId) => state.auths.user.find((user) => user.id === userId)
export const getUser = state => state.auths.user
export const getEmail = state => state.auths.user.username;
export const getRoles = state => state.auths.roles
export const getSuccess = state => state.auths.success
export const getToken = state => state.auths.token
export const isAuth = state => String(state.auths.token).length !== 0
export const { logout,setToken } = authSlice.actions
export default authSlice.reducer