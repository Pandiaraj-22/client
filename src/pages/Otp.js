import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Otp = () => {

  const navigate = useNavigate()
    const [otp,setOtp] = useState("");

  useEffect(() => {
    var resOtp = localStorage.getItem('otp')
    if(!resOtp){
      navigate('/')
    }
  },[0])
    const formsubmit = async (e) => {
      if(otp.length == 6){
       var resOtp = localStorage.getItem('otp')
       if(resOtp == otp){
        toast.success("Register successfully")
        window.location.href = 'https://hellointech.in/'
       }else{
        toast.error("Invalid otp")
       }
      }else{
        toast.error("Enter valid otp")
      }
    }
    return (
        <>
        <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input
                type="text"
                name="otp"
                onChange={(e)=>setOtp(e.target.value)}
                placeholder="Enter Your OTP"
              />
            </div>
            <button className="btn" type='button' onClick={formsubmit}>
             Submit
            </button>
          </form>
        </div>
        
      </section>
      <ToastContainer />

        </>
    )
}

export default Otp