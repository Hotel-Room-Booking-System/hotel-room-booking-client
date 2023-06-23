import {useNavigate } from "react-router-dom";
import classes from "./BookingForm.module.css";


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooking, addNewBooking, booking, deleteBooking, getAllBookings } from "./bookingSlice";
import { findRoomByselected, getFilteredDate } from "../Room/roomSlice";
import SelectedRoomItemForBooking from "../Room/SelectedRoomItemForBooking";
import { addBookingRoom } from "../BookingRoom/bookingRoomSlice";
import { getEmail, getToken, getUser } from "../../features/auth/authSlice";
import BookingModal from "../ui/BookingModal";

const BookingForm = () => {
  const button = `mt-5 mb-3 btn btn-primary ${classes.button}`;
  const selectedRooms = useSelector(findRoomByselected);
  const filteredDate = useSelector(getFilteredDate);

  const [guestName, setGuestName] = useState('')
  const [nrc, setNRC] = useState('')
  const [phone, setPhone] = useState('')
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [totalAdults, setTotalAdults] = useState('')
  const [totalChildren, setTotalChildren] = useState('')
  const [specialRequest, setSpecialRequest] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onGuestNameChange = (e) => setGuestName(e.target.value);
  const onNrcChange = (e) => setNRC(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onCountryOfOrigin = (e) => setCountryOfOrigin(e.target.value);
  const onTotalAdults = (e) => setTotalAdults(e.target.value);
  const onTotalChildren = (e) => setTotalChildren(e.target.value);
  const onSpecialRequest = (e) => setSpecialRequest(e.target.value);

  const canSave = [guestName,nrc,phone,countryOfOrigin,totalAdults,totalChildren,specialRequest] &&
  addRequestStatus === "idle";

  const user = useSelector(getEmail)
  const username = String(user)
  
  
  console.log("In the booking form Cansave:"+canSave)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //for user
  const token = useSelector(getToken)

  //for room
  const count = Object.keys(selectedRooms).length
  console.log("No of room:"+count)


  //For Night
  const checkIn = new Date(filteredDate.checkIn)
  const checkOut = new Date(filteredDate.checkOut)
  const seconds =Math.abs(checkOut - checkIn) 
  const oneDay = 24 * 60 * 60 * 1000
  const nights = Math.floor(seconds/oneDay)
  console.log("Nights: "+nights)

 
  const numOfRoom = count;

  const onSubmit = (event) => {
    event.preventDefault();
      if(canSave){

        try {

          setAddRequestStatus('pending')

       dispatch(
        addNewBooking({
          booking: {
                guestName,
                nrc,
                phone,
                username,
                countryOfOrigin,
                totalAdults,
                totalChildren,
                specialRequest,
                checkIn,
                checkOut,
                numOfRoom
          },token
        })
       ).unwrap()   
       dispatch(addBooking({
       
        guestName,
        nrc,
        phone,
        countryOfOrigin,
        totalAdults,
        totalChildren,
        specialRequest}))
      } catch (error) {
        console.log(error)  
       }finally{
        setAddRequestStatus('idle')
       }
      }
       setGuestName('')
       setNRC('')
      setPhone('')
      setCountryOfOrigin('')
      setTotalAdults('')
      setTotalAdults('')
      setSpecialRequest('')
      navigate('/payment')

    }

   

  return (
    <section>
      <div className="container">
        <div className=" row mt-3">
          <div className="col-7">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label className="d-flex flex-row justify-content-between">
                  <div className="mb-2">
                    Primary Guest Name
                    <sup className="ml-1 text-danger">*</sup>
                  </div>
                </label>
                <input type="text" required className="form-control" value={guestName} onChange={onGuestNameChange}></input>
              </div>
              <div className="form-group mt-3">
                <label className="d-flex flex-row justify-content-between">
                  <div className="mb-2">
                    Phone Number
                    <sup className="ml-1 text-danger">*</sup>
                  </div>
                </label>
                <input
                  type="text"
                  required
                  pattern="^09[0-9]{6,10}$"
                  placeholder="09_ _ _ _ _ _ _ "
                  className="form-control"
                  value={phone}
                  onChange={onPhoneChange}
                ></input>
                <small class="form-text text-muted">
                  Myanmar mobile number is required. Example : 09123456789
                </small>
              </div>
              <div className="form-group mt-3">
                <label className="d-flex flex-row justify-content-between">
                  <div className="mb-2">NRC</div>
                  
                </label>
                <input type="text" className="form-control" value={nrc} onChange={onNrcChange}></input>
              </div>
              <div className="form-group mt-3">
                <label className="d-flex flex-row justify-content-between">
                  <div className="mb-2">
                    Country of Origin
                    <sup className="ml-1 text-danger">*</sup>
                  </div>
                </label>
                <select required className="form-select" value={countryOfOrigin} onChange={onCountryOfOrigin}>
                  <option value="Afghanistan">Afghanistan</option>s
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antartica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegowina">
                    Bosnia and Herzegowina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="France Metropolitan">
                    France, Metropolitan
                  </option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and Mc Donald Islands
                  </option>
                  <option value="Holy See">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran (Islamic Republic of)</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Democratic People's Republic of Korea">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao">Lao People's Democratic Republic</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon" selected>
                    Lebanon
                  </option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint LUCIA">Saint LUCIA</option>
                  <option value="Saint Vincent">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Span">Spain</option>
                  <option value="SriLanka">Sri Lanka</option>
                  <option value="St. Helena">St. Helena</option>
                  <option value="St. Pierre and Miguelon">
                    St. Pierre and Miquelon
                  </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syrian Arab Republic</option>
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Viet Nam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (U.S)">
                    Virgin Islands (U.S.)
                  </option>
                  <option value="Wallis and Futana Islands">
                    Wallis and Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mt-3">
                    <label class="d-flex flex-row justify-content-between">
                      <div className="mb-2">Total Adults</div>
                     
                    </label>
                    <small className="text-warning">20000 Kyats per additional adult per night</small>
                    <input name="" type="text" class="form-control" value={totalAdults} onChange={onTotalAdults}></input>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mt-3">
                    <label class="d-flex flex-row justify-content-between">
                      <div className="mb-2">Total Children</div>
                    </label>
                    <small className="text-warning">Under 5 years stays free</small>
                    <input name="" type="text" class="form-control" value={totalChildren} onChange={onTotalChildren}></input>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <label className="d-flex flex-row justify-content-between">
                  <div className="mb-2">Special Request</div>
                  <div>
                    <small className="ml-auto text-muted">optional</small>
                  </div>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eg : low-floor room"
                  value={specialRequest}
                  onChange={onSpecialRequest}
                ></input>
              </div>
              <div class=" mt-4">
                <input type="checkbox" className={classes.checkbox}></input>
                <label className="form-check-label">
                  <small className="ml-2">
                    Do you want to save your guest information?
                  </small>
                </label>
              </div>
              <div className="row mt-3">
               
                  <button type="submit" className={button}>
                    Submit
                  </button>
               
              </div>
            
            </form>
          </div>
          <div class="col-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex">
                  <div class="w-100 ">
                    <h4>Hotel Name</h4>
                    <div class="row mt-3">
                      <div class="col-5">
                        <label>Check-in Date :</label>
                      </div>
                      <div class="col-7">
                        <label>
                          <b>{filteredDate.checkIn}</b>
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5">
                        <label>Check-out Date :</label>
                      </div>
                      <div class="col-7">
                        <label>
                          <b>{filteredDate.checkOut}</b>
                        </label>
                      </div>
                    </div>
                    <div class="mt-2">
                      <label>
                        <b>{count} Room</b>
                      </label>
                      <span>
                        <b>, </b>
                      </span>
                      <label>
                        <b>{nights} Nights</b>
                      </label>
                     
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="mb-3 font-weight-bold text-muted">
                    Room Selections
                  </div>
                  {selectedRooms.map((room) => (
                <SelectedRoomItemForBooking
                    id = {room.id}
    image1 = {room.image1}
    roomType = {room.roomType.name}
    price = {room.roomType.price}
                />
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
