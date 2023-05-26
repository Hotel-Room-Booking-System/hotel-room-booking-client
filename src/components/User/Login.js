import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


const Login = () => {

  const [isModalOpen, setModalOpen] = useState(false)
  const [isSignUpOpen, setSignUpOpen] = useState(false)
 
  function toLogin(){
    setModalOpen(true)
    setSignUpOpen(false)
  }
  function toBack(){
    setModalOpen(false)
    
  }

  function toSignUp(){
    setSignUpOpen(true)
    setModalOpen(false)
  }

  function toArrow(){
    setSignUpOpen(false)
  }

  return (
  
    <section>
    <img src="https://c4.wallpaperflare.com/wallpaper/952/263/731/ocean-underwater-wallpaper-preview.jpg"
     className="mainimage w-100" alt=""/>
    <div class="cotn_principal">
      <div class="cont_centrar">
        <div class="cont_login">
          <div class="cont_info_log_sign_up">
            <div class="col_md_login">
              <div class="cont_ba_opcitiy">
                <h2>LOGIN</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                <button class="btn_login" onClick={toLogin}>
                  LOGIN
                </button>
                {isModalOpen && <LoginForm onBack={toBack} />}

              </div>
            </div>
            <div class="col_md_sign_up">
              <div class="cont_ba_opcitiy">
                <h2>SIGN UP</h2>

                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

                <button class="btn_sign_up " onClick={toSignUp}>
                  SIGN UP
                </button>
                {isSignUpOpen && <SignUpForm onArrow={toArrow}/>}
              </div>
            </div>
          </div>

          <div class="cont_back_info">
            <div class="cont_img_back_grey">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/561/987/812/vacation-sandy-beach-water-crystal-clear-wallpaper-preview.jpg"
                className="w-100" alt=""
              />
            </div>
          </div>
       
        </div>
      </div>
    </div>
    </section>
  
   
  );
};

export default Login;
