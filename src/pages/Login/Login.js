import React from 'react';
import Toggle from './Toggle';
import './Login.css';


const AIC_LOGO = 'https://aic.nsw.edu.au/wp-content/uploads/2015/08/aic_resize.png';
const SC_LOGO = 'https://sydneycollege.nsw.edu.au/wp-content/uploads/2020/07/SYDNEY-COLLEGE.png';
const RightSide_img = 'https://aic.nsw.edu.au/wp-content/uploads/elementor/thumbs/gu-2321-p6d9v1nd1r8tgwkjchh17xh6849qpgwbdnexyk1n6o.jpg';
function Login(){
  return(
    <div className = "Login">
      <div className = "Login__LeftSide">
        <div className="Login__Form">
          <h1 className ="Login__Title">Welcome Back</h1>
          <h2 className = "Login__Message">Login into your account </h2>

          {/* logo boxes*/}
          <div className="Login__LogoSelection">
            <div className="logo">
              <img src={AIC_LOGO} alt="aic logo" />
              <div>
                <a href="https://aic.nsw.edu.au/">AIC</a>
              </div>
            </div>

            <div className="logo">
              <img src={SC_LOGO} alt="sc logo" />
              <div>
                <a href="https://sydneycollege.nsw.edu.au/">SC</a>
              </div>
            </div>
          </div>
          
          <h3 className = "Login__Suggest"> Or Continue with </h3>
          <div className="Login__Detail">
            <h4 className="Login__Detail_id">Email</h4>
            <h5 className="Login__Detail_pass">Password</h5>
          </div>

          <div className="Login__ToggleSection">
            <Toggle name="Remember me" />
          </div>
        </div>
      </div>
      <div className="Login__RightSide">
        <div className="contentBox">
          TEST
        </div>
      </div>
    </div>
    

  );
}
 export default Login;