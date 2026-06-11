import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
    const {isLoggedIn,setIsLoggedin}=useContext(AuthContext);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px",
            backgroundColor: "#0a0a0a",
            borderBottom: "1px solid #1f1f1f",
            fontFamily: "Arial"
        }}>

        <Link to="/">
            <img
                src={logo}
                alt="mercedes benz logo"
                width={160}
                height={50}
                style={{ cursor: "pointer" }}
            />
        </Link>

        <nav style={{
            display: "flex",
            gap: "25px",
            alignItems: "center"
        }}>
            <div>
                <Link style={linkStyle} to="/">Home</Link>
            </div>
            <div>
                <Link style={linkStyle} to="/aboutus">About Us</Link>
            </div>
            <div>
                <Link style={linkStyle} to="/contact">Contact</Link>
            </div>
        </nav>

        {/* login sign up logout dashboard */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

        { !isLoggedIn &&
            <Link to="/login">
                 <button style={btnStyle}>Login</button>
            </Link>
        }

        { !isLoggedIn &&
            <Link to="/signup">
                 <button style={btnStyle}>Sign Up</button>
            </Link>
        }

        { isLoggedIn &&
            <Link to="/">
                 <button
                    style={btnStyle}
                    onClick={()=>{
                        setIsLoggedin(!isLoggedIn)
                        toast.success("logged out successfull")
                    }}
                 >
                    Logout
                 </button>
            </Link>
        }

        { isLoggedIn &&
            <Link to="/dashboard">
                 <button style={btnStyle}>Dashboard</button>
            </Link>
        }

        </div>

        </div>
    )
}

export default Navbar

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    position: "relative"
}

const btnStyle = {
    padding: "8px 12px",
    border: "1px solid #00d2be",
    background: "transparent",
    color: "#00d2be",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s"
}