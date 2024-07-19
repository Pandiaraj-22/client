import React, { useState } from "react";
import { Await , NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sendOtpFunction } from '../services/Apis';
import { useNavigate } from "react-router-dom";
import "../styles/mix.css";

const Login = () => {

 const navigate = useNavigate()
  const [email, setEmail] = useState("");

  //send otp
  const sendOtp = async(e) => {
  try {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      const data = {
        email:email
      } 
      const response = await sendOtpFunction(data); 
      console.log(response,"=-=-=-response") 
      if(response.data.status == true){
       toast.success(response.data.Message)
       localStorage.setItem('otp', response.data.otp)
       navigate("/user/otp")
      }else{
       toast.error(response.data.Message)
      }
    //   const response = await API.sendOtpFunction(data);
      // console.log(response); 
    }
  } catch (error) {
  }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please Login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}>
              Login
            </button>
            <p>
              Don't have and account <NavLink to="./register">Sing up</NavLink>
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
