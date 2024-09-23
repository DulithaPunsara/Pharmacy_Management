import React, { useState, useEffect } from 'react';
import './LoginRegisterPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const [users, setUsers] = useState([]); // Renamed 'products' to 'users'
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEmail, setSelectedEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // useNavigate should be inside the component

    useEffect(() => {
      fetch("http://localhost:8082/login/getallusers")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data); // Renamed 'products' to 'users'
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }



/*
    const handleCheckClick = () => {
      const user = users.find((user) =>
        user.name.toLowerCase() === searchQuery.toLowerCase() // Changed 'product' to 'user'
      );
      if (user) {
        console.log(`Email Address: ${user.email}`);
      } else {
        console.log('Email address not found');
      }
    };

*/



    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };



    // Close button handler
    const handleClose = () => {
        navigate('/'); // Navigate to '/login/dashboard'
        setIsVisible(false); // Set visibility to false when the close button is clicked
    };






    const handleLoginSubmit = (e) => {
        
        e.preventDefault();
        console.log('Email:', loginDetails.email);
        console.log('Password:', loginDetails.password);
        // Add login logic here
        const user = users.find((user) =>
            user.email.toLowerCase() === loginDetails.email.toLowerCase(),
          );
          if (user) {
            console.log(`Email Address faild: ${user.email}`);
            if (user.password === loginDetails.password) { 
                //console.log(`Login successful for Email: ${user.email}`);
                        navigate('/login/dashboard'); // Navigate to '/login/dashboard'
                        setIsVisible(false); // Set visibility to false when the close button is clicked
            } else {
                console.log('Incorrect password / Email');
                setLoginDetails({ email: '', password: '' });
                setMessage('Incorrect password / Email');
            }
          } else {
            console.log('Incorrect password / Email');
            setLoginDetails({ email: '', password: '' });
            setMessage('Incorrect password / Email');
          }
    };






    if (!isVisible) return null; // Return null if the component is not visible

    return (
        <div className="container1">
            <div className="closeButton1" onClick={handleClose}>X</div> {/* Close Button */}
            
            <form onSubmit={handleLoginSubmit} className="form">
                <h2 className="title1">Login</h2>
                <div className="formGroup1">
                    <label className="label1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={loginDetails.email}
                        onChange={handleLoginChange}
                        className="input1"
                        required
                    />
                </div>
                <div className="formGroup1">
                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={loginDetails.password}
                        onChange={handleLoginChange}
                        className="input1"
                        required
                    />
                </div>
                <button type="submit" className="button1" >Login</button>
                {message && <p  className="arry1">{message}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
