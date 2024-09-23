import React from "react"
import "./footer.css"
import { FaYoutube,FaFacebook,FaTwitter } from "react-icons/fa"

const Footer = () => {
    return(
        
      <div className="footer">
        {/*
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h4>For Business</h4>
                    <a href="/order">
                    <p>Employer</p>
                    </a>
                    <a href="/employer">
                    <p>Suplier</p>
                    </a>
                    <a href="/employer">
                    <p>Store</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                <h4>Resources</h4>
                    <a href="/hjfb">
                    <p>Resource Center</p>
                    </a>
                    <a href="/employer">
                    <p>Vehicles</p>
                    </a>
                    <a href="/employer">
                    <p>Stores Area</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>Partners</h4>
                    <a href="/employer">
                    <p>Swing Tech</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>Company</h4>
                    <a href="/about">
                    <p>About</p>
                    </a>
                    <a href="/about">
                    <p>Press</p>
                    </a>
                    <a href="/about">
                    <p>Career</p>
                    </a>
                    <a href="/about">
                    <p>Contact</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>Comming soon on</h4>
                    <div className="socialmedia">
                    <FaYoutube className="icons youtube"/>
                    <FaFacebook className="icons facebook"/>
                    <FaTwitter className="icons twitter"/>
                    </div>

                </div>

            </div>
        </div>
 */}
 
       


        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} PharmaNet . All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><p>Terms & conditions</p></a>
                <a href="/privacy"><p>Privacy</p></a>
                <a href="/security"><p>Security</p></a>
                <a href="/order"><p>Order Declaration</p></a>
            </div>
        </div>

      </div>
    )
}


export default Footer