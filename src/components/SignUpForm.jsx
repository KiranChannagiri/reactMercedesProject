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

    function changeHandler(event){
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
    <div className="auth-form">
        <form onSubmit={submitHandler}>
            <div className="form-row" style={{display: 'flex', gap: '15px'}}>
                <div className="form-group" style={{flex: 1}}>
                    <label>First Name <sup className="text-teal">*</sup></label>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group" style={{flex: 1}}>
                    <label>Last Name <sup className="text-teal">*</sup></label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Email <sup className="text-teal">*</sup></label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                />
            </div>

            <div className="form-group">
                <label>Password <sup className="text-teal">*</sup></label>
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                    />
                    <span className="password-toggle" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? <IoIosEye/> : <IoIosEyeOff/>}
                    </span>
                </div>
            </div>

            <div className="form-group">
                <label>Confirm Password <sup className="text-teal">*</sup></label>
                <div className="password-wrapper">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                    />
                    <span className="password-toggle" onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? <IoIosEye/> : <IoIosEyeOff/>}
                    </span>
                </div>
            </div>

            <button type="submit" className="btn-primary">
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm;
