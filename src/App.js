import { Route, Router, Routes } from "react-router-dom";

import Layout from "./components/ui/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Room from "./components/RoomType/Room";
import RoomDetail from "./components/Room/RoomDetail";
import YourBooking from "./components/Booking/YourBooking";
import Questions from "./components/pages/Questions";
import BookingForm from "./components/Booking/BookingForm";
import Facilities from "./components/RoomType/Facilities";
import Payment from "./components/Payment/Payment";
import Deposite from "./components/Payment/Deposite";
import Login from "./components/User/Login";
import SelectedRoom from "./components/Room/SelectedRoom";
import PaymentShow from "./components/Payment/PaymentShow";
import UserPaymentInfo from "./components/Payment/UserPaymentInfo";



function App() {
  return (
    <>
    
      <Routes>
     
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/room" element={<Room/>}/>
        <Route path='/room-detail/:roomTypeId' element={<RoomDetail/>} />
        <Route path="/room-detail/selectedRoom/:roomId" element={<SelectedRoom/>} />
        <Route path="/find-your" element={<YourBooking/>}/>
        <Route path="/frequently-asked-questions" element={<Questions/>}/>
        <Route path="/form" element={<BookingForm/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/facility" element={<Facilities/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/payment-table" element={<PaymentShow/>}/>
        <Route path="/user" element={<UserPaymentInfo/>}/>
        <Route path="/deposite" element={<Deposite/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
      
      </Routes>
    </>
    
  );
}

export default App;
