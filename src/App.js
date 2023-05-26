import { Route, Routes } from "react-router-dom";

import Layout from "./components/ui/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Room from "./components/Room/Room";
import RoomDetail from "./components/Room/RoomDetail";
import YourBooking from "./components/Booking/YourBooking";
import Questions from "./components/pages/Questions";
import BookingForm from "./components/Booking/BookingForm";
import Facilities from "./components/RoomType/Facilities";
import Payment from "./components/Payment/Payment";
import Deposite from "./components/Payment/Deposite";
import Login from "./components/User/Login";



function App() {
  return (
    <>
    
      <Routes>
     
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="/room" element={<Room/>}/>
        <Route path='/room-detail' element={<RoomDetail/>} />
        <Route path="/find-your-booking" element={<YourBooking/>}/>
        <Route path="/frequently-asked-questions" element={<Questions/>}/>
        <Route path="/form" element={<BookingForm/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/facility" element={<Facilities/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/deposite" element={<Deposite/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
      
      </Routes>
    </>
    
  );
}

export default App;
