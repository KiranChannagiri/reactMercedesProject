import React from 'react'
import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext } from 'react';
import {toast} from "react-hot-toast"
import { AuthContext } from '../Context.jsx/AuthContext';
import Dashboard from '../Pages/Dashboard';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const [showPassword,setShowPassword]=useState(false);
    const {isLoggedIn,setIsLoggedin}=useContext(AuthContext);
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
            toast.success("account created success fully")
           let  accountData={
                ...formData
            }
            console.log(accountData);
            navigate("/dashboard")
        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
             {/* fname and lname */}
            <div>
                <label htmlFor="fname">First Name <sup>*</sup></label>
                <input type="text" 
                id='fname'
                placeholder='enter the first name'
                value={formData.firstName}
                required
                name="firstName"
                onChange={changeHandler}
                />
                <label htmlFor="lname">last Name <sup>*</sup></label>
                <input type="text" 
                id='lname'
                placeholder='enter the last name'
                value={formData.lastName}
                required
                name="lastName"
                onChange={changeHandler}
                />
            </div>

            {/* email */}
            <div>
                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="email" 
                id='email'
                placeholder='enter the email'
                value={formData.email}
                required
                name="email"
                onChange={changeHandler}
                />
            </div>


            {/* password and confirm password  */}
            <div>
                <label htmlFor="password">create password <sup>*</sup></label>
                <input type= {showPassword? "input" : "password"}
                id='password'
                placeholder='enter the password'
                value={formData.password}
                required
                name="password"
                onChange={changeHandler}
                /> 
                <span onClick={()=>setShowPassword(!showPassword)}>
                    {
                       showPassword  ?  <IoIosEye/> : <IoIosEyeOff/>   
                    }
                </span>
                

                <label htmlFor="confirmPassword">confirm password <sup>*</sup></label>
                <input type= {showPassword? "input" : "password"}
                id='confirmPassword'
                placeholder='confirm password'
                value={formData.confirmPassword}
                required
                name="confirmPassword"
                onChange={changeHandler}
                /> 
                <span onClick={()=>setShowPassword(!showPassword)}>
                    {
                       showPassword  ?  <IoIosEye/> : <IoIosEyeOff/>   
                    }
                </span>   
            </div>

             <div>
                <button>Create Account</button>
             </div>

        </form>       
    </div>
  )
}

export default SignUpForm