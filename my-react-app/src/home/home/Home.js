import React from 'react';
import headerImage from './img/2.png'; 
import Image1 from './img/6.png';// Import the image
import Image2 from './img/5.png';// Import the image
import Image3 from './img/7.png';// Import the image
import './home.css';

const Header = () => {
    return (
        <div className="home-page">
            <header className="header12">
                <img src={headerImage} alt="Header" className="header-image" />
            </header>
            {/* Pharmacy description component at the bottom */}<br></br><br></br><br></br>
            <div className="home-page2">
                <h1>This pharmacy</h1>
                <p>
                    This pharmacy provides a wide range of high-quality medications and healthcare products, ensuring that customers receive the best care for their health needs. With a commitment to safety, professionalism, and excellent service, the pharmacy offers prescription drugs, over-the-counter medications, and wellness products. Friendly and knowledgeable staff are always available to assist with any questions or guidance on medication usage, making the pharmacy a trusted partner in managing personal health.
                </p>
            </div>
            <div className="image-gallery">
                <img src={Image1} alt="Image1" className="twinkle-image" />
                <img src={Image2} alt="Image2" className="twinkle-image" />
                <img src={Image3} alt="Image3" className="twinkle-image" />
            </div>
        </div>
    );
};

export default Header;




