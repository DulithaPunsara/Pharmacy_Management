import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "./navbar.css"
import{FaBars} from 'react-icons/fa';
import{ImCross} from 'react-icons/im';
import { FaUserShield      } from "react-icons/fa";

const Navbar = () => {

    const [Mobile,setMobile] = useState(false)


    return(
        
        <nav className="navbar">
           
            <h4 className="logo">PharmaNet</h4>
            

            <ul className = {Mobile? "nav-links-mobile" : "nav-links"} onClick={() =>setMobile(false)}>
            
            <Link to='/'><li>Home</li></Link>
            {/*<Link to='/order'><li>Order</li></Link> */}
            <Link to='/about-us'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/login' className="login-link"><li><FaUserShield     className="icon" /> Admin Login</li></Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile? < ImCross/> : <FaBars/> }
              
            </button>
        

           
        </nav>
    )
}


export default Navbar