import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const {isLoggedIn,setIsLoggedin}=useContext(AuthContext);
    let navigate =useNavigate();
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img
                        src={logo}
                        alt="mercedes benz logo"
                        width={140}
                        height={40}
                    />
                </Link>

                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/aboutus" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>

                <div className="nav-auth">
                    { !isLoggedIn &&
                        <Link to="/login" className="nav-btn btn-outline">
                             Login
                        </Link>
                    }

                    { !isLoggedIn &&
                        <Link to="/signup" className="nav-btn btn-primary">
                             Sign Up
                        </Link>
                    }

                    { isLoggedIn &&
                        <button
                            className="nav-btn btn-outline"
                            onClick={()=>{
                                setIsLoggedin(!isLoggedIn);
                                navigate("/");
                                toast.success("logged out successfull")
                            }}
                        >
                            Logout
                        </button>
                    }

                    { isLoggedIn &&
                        <Link to="/dashboard" className="nav-btn btn-primary">
                             Dashboard
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
