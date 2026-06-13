import React from 'react'
import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';

const LoginForm = () => {
        const[vibPassword,setVibPass]=useState(false);
        const {isLoggedIn,setIsLoggedin}=useContext(AuthContext);
        let navigate = useNavigate();
    const [formData,setFormData]= useState({
            email:"",
            password:""
        })
        function changeHandler(event){
            setFormData((formData)=>{
                return {
                     ...formData,
                    [event.target.name]: event.target.value
                }
            })
        }
    function sumbitHandler(event){
      event.preventDefault();
      setIsLoggedin(true);
      toast.success("logged in success")
      navigate("/dashboard")
    }
  return (
    <div className="auth-form">
       <form onSubmit={sumbitHandler}>

        <div className="form-group">
            <label htmlFor="email">
                Email Address <sup className="text-teal">*</sup>
            </label>
            <input
            required
            id='email'
            type="email"
            placeholder='enter the email address'
            value={formData.email}
            name="email"
            onChange={changeHandler}
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">
                Password <sup className="text-teal">*</sup>
            </label>
            <div className="password-wrapper">
                <input
                required
                type={vibPassword ?"text" :"password"}
                id="password"
                placeholder='enter the password'
                value={formData.password}
                name="password"
                onChange={changeHandler}
                />
                <span className="password-toggle" onClick={()=>setVibPass(!vibPassword)}>
                {
                    vibPassword ? (<IoIosEye/>) : (<IoIosEyeOff/>)
                }
                </span>
            </div>
        </div>
        <button className="btn-primary" type="submit">Sign In</button>
       </form>
    </div>
  )
}

export default LoginForm;