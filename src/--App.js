import { Route, Routes } from "react-router-dom"
import AdminDashboard from "./components/pages/AdminDashboard"
import RoomTypeTable from "./components/tables/RoomTypeTable"
import AddRoom from "./components/Room/AddRoom"
import CreateRoomType from "./components/RoomType/CreateRoomType"
import UpdateRoomType from "./components/RoomType/UpdateRoomType"
import RoomTable from "./components/tables/RoomTable"
import UpdateRoom from "./components/Room/UpdateRoom"
import PaymentShow from "./components/Payment/PaymentShow"
import UpdatePayment from "./components/Payment/UpdatePayment"
import BookingTable from "./components/tables/BookingTable"
import UserPaymentList from "./components/Payment/UserPaymentList"
import BookingShow from "./components/Booking/BookingShow"
import BookingRoomTable from "./components/tables/BookingRoomTable"


function App(){
    return(
        <Routes>
        <Route path="/" element={<AdminDashboard/>}>
            <Route path="/addroom" element={<AddRoom/>}/>
            <Route path="/createroomType" element={<CreateRoomType/>}/>
            <Route path="/roomtypeTable" element={<RoomTypeTable/>}/>
            <Route path="/roomtypeTable/updateroomType/:roomTypeId" element={<UpdateRoomType/>}/>
            <Route path="/roomTable" element={<RoomTable/>}/>
            <Route path="/roomTable/updateroom/:roomId" element={<UpdateRoom/>} />
            {/* <Route path="/bookingTable" element={<BookingTable/>}/> */}
            <Route path="/paymentTable" element={<PaymentShow/>}/>
            <Route path="/user" element={<UserPaymentList/>}/>
            <Route path="/bookingTable" element={<BookingShow/>}/>
            <Route path="/bookingRoomTable" element={<BookingRoomTable/>}/>
            <Route path="/payment-table" element={<PaymentShow/>}/>
        <Route path="payment-table/update-payment/:paymentId" element={<UpdatePayment/>}/>
        </Route>

        </Routes>
    )
}
export default App