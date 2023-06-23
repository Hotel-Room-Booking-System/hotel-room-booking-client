
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";

import { logout  } from "../../features/auth/authSlice";
import { getToken} from "../../features/auth/authSlice";



const MainNavigation = () => {
  const navbg = `navbar navbar-expand-lg navbar-light ${classes.navbg}`;
  const name = `navbar-brand  ${classes.name}`;
  const navEffect = `navbar-nav ms-auto mb-2 mb-lg-0 ${classes.menu}`;

 
  const dispatch = useDispatch()
 
  // useEffect(() =>{
  //   dispatch(fetchAllUsers())
  // },[dispatch])
  

  const user  = useSelector( state => state.auths.user);
  //const userlist = useSelector(fetchAllUsers);
  
   console.log("Log in user: "+user)
    const loginUser = user.firstname+ " " + user.lastname 
   const loginUserId = user.id
   console.log("User Info:"+loginUser)
   console.log("Login user Id:"+loginUserId)
   
   //const getUserFromDatabase = useSelector((state)=>selectUserById (state,Number(loginUserId)))
   
  // console.log("User from database:"+getUserFromDatabase)
  //  const loginUsername = getUserFromDatabase.firstname+" "+getUserFromDatabase.lastname
  //  console.log("User from databse:"+loginUsername)
   //console.log("Email from database:"+getUserFromDatabase.username)
   //const loginUser = getUserFromBackend.firstname+ " " + getUserFromBackend.lastname 
   console.log("LoginUser:"+loginUser)
   const token = useSelector(getToken);
    let info
   if(token){
     info = loginUser
   }else{
    info = "My Account"
   }
 
  
  

  

  
    
  

  let myAccountItem = ''

  if (token) {
    myAccountItem = (
      <Link>
      <Link
        to="/"
        className="dropdown-item font-weight-bold"
        onClick={()=>{dispatch(logout())}}
      >
       
        <p className="mb-0">
          Log out <br />  
        </p>
        
      </Link>
      <Link className="dropdown-item font-weight-bold" to={`/user-profile/${user.id}`}
        > Profile</Link>
      </Link>
    );
  } else {
    myAccountItem =(
    <Link to="/login" className="dropdown-item font-weight-bold">
      
      <p className="mb-0">
        Log in <br /> Profile
      </p>
    </Link>
    )
  }

  return (
    <section>
      <nav class={navbg}>
        <div class="container-fluid">
          <Link className={name} to="/">
            LAND OF HAPPINESS
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={navEffect}>
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li>
              <Link className="nav-link" to="/find-your">
                  Your Booking
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/paymentInfo">
                 Payment
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/frequently-asked-questions">
                  FAQS
                </Link>
              </li>

               {/* <li>
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li> */}
              <li>
                <div className="dropdown show">
                
                    <Link className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >{info} </Link>
                
                   
                <div className="dropdown-menu" >
                  {myAccountItem}
                
                </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default MainNavigation;
