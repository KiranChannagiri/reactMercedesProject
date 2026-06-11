import React from 'react'
import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context.jsx/AuthContext';
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
    <div >
       <form onSubmit={sumbitHandler}>
        
        <label htmlFor="email">
            Email Address <sup>*</sup>
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


        <label htmlFor="password">
            Password <sup>*</sup>
        </label>
        <input
        required
        type={vibPassword ?"text" :"password"}
        id="password"
        placeholder='enter the password' 
        value={formData.password}
        name="password"
        onChange={changeHandler}
        />
        <span onClick={()=>setVibPass(!vibPassword)}>
        {
            vibPassword ? (<IoIosEye/>) : (<IoIosEyeOff/>) 
        }
        </span>
        <button >Sign In</button>
       </form>

    </div>
  )
}


export default LoginForm;