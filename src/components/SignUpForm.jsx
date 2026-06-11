import React from 'react'
import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext } from 'react';
import {toast} from "react-hot-toast"
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MBCar from "../assets/images/MBAMGFOneCar.jpg"

const SignUpForm = () => {
    const [showPassword,setShowPassword]=useState(false);
    const {setIsLoggedin}=useContext(AuthContext);
    let navigate=  useNavigate();

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(){
        setFormData((formData)=>{
            return {
                ...formData,
                [event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("password didnt match")
            return;
        }else{
            setIsLoggedin(true);
            toast.success("account created successfully")
            navigate("/dashboard")
        }
    }

  return (
    <div style={pageStyle}>

        {/* LEFT IMAGE */}
        <div style={leftStyle}>
            <img
                src={MBCar}
                alt="Mercedes F1 Car"
                style={imageStyle}
                width={400}
                height={400}
            />
        </div>

        {/* RIGHT FORM */}
        <div style={rightStyle}>

            <form onSubmit={submitHandler} style={formStyle}>

                <h2 style={{color:"#00d2be", textAlign:"center"}}>
                    Create Account
                </h2>

                {/* name */}
                <div style={rowStyle}>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        style={inputStyle}
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        style={inputStyle}
                    />
                </div>

                {/* email */}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    style={inputStyle}
                />

                {/* password */}
                <div style={passwordBox}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        style={inputStyle}
                    />
                    <span onClick={()=>setShowPassword(!showPassword)} style={iconStyle}>
                        {showPassword ? <IoIosEye/> : <IoIosEyeOff/>}
                    </span>
                </div>

                {/* confirm password */}
                <div style={passwordBox}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        style={inputStyle}
                    />
                    <span onClick={()=>setShowPassword(!showPassword)} style={iconStyle}>
                        {showPassword ? <IoIosEye/> : <IoIosEyeOff/>}
                    </span>
                </div>

                <button type="submit" style={buttonStyle}>
                    Create Account
                </button>

            </form>

        </div>

    </div>
  )
}

export default SignUpForm;

const pageStyle = {
    display: "flex",
    height: "100vh",
    background: "#0a0a0a",
    color: "white"
}

const leftStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000"
}

const rightStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const imageStyle = {
    width: "90%",
    height: "80%",
    objectFit: "cover",
    borderRadius: "10px"
}

const formStyle = {
    width: "80%",
    padding: "20px",
    background: "#111",
    borderRadius: "10px"
}

const rowStyle = {
    display: "flex",
    gap: "10px"
}

const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    background: "#000",
    border: "1px solid #333",
    color: "white",
    borderRadius: "5px"
}

const passwordBox = {
    position: "relative"
}

const iconStyle = {
    position: "absolute",
    right: "10px",
    top: "35%",
    cursor: "pointer",
    color: "#00d2be"
}

const buttonStyle = {
    width: "100%",
    padding: "10px",
    background: "#00d2be",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px"
}