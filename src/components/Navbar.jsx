import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from '../Context.jsx/AuthContext'

////hsl(171,100%,48%)
const Navbar = () => {
    const {isLoggedIn,setIsLoggedin}=useContext(AuthContext);
  return (
    <div className='navLinkComponenet'>
    <Link to="/">
        <img src={logo} alt="mercedes benz logo" width={160} height={50} />
    </Link>
    
    <nav className='navlinks'>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/aboutus">About Us</Link>
        </div>
        <div>
            <Link to="/contact">Contact</Link>
        </div>
    </nav>


    {/* login sign up logout dashboard */}
    { !isLoggedIn &&
        <Link to="/login">
             <button >Login in </button>
        </Link>
    } { !isLoggedIn &&
        <Link to="/signup">
             <button>Sign Up</button>
        </Link>
    } { isLoggedIn &&
        <Link to="/">
             <button onClick={()=>{setIsLoggedin(!isLoggedIn)
             toast.success("logged out successfull")
             }}>Logout</button>
        </Link>
    } { isLoggedIn &&
        <Link to="/dashboard">
             <button>Dashboard</button>
        </Link>
    }
    </div>
  )
}

export default Navbar