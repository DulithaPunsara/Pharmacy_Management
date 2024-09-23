import React, { useEffect, useState } from 'react';
import './home.css'; // Updated CSS file name
import exampleImage from './img/1.png'; 
import exampleImage1 from './img/2.png'; 
import exampleImage2 from './img/3.png'; 

const BoxDisplay = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/login/getallusers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Number of rows: ${data.length}`); // Log the number of rows
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);




// stock

  useEffect(() => {
    fetch("http://localhost:8081/medicine")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);













  // Determine the number of rows
  const numberOfRows = users.length;
  const numberstaff = products.length;

  const boxes = [
    { id: 1, image: exampleImage, label: numberOfRows },  // Use numberOfRows for the label
    { id: 2, image: exampleImage1, label: numberstaff },
    { id: 3, image: exampleImage2, label: '30' }
  ];

  return (
    <div className="box-container223">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && boxes.map(box => (
        <div key={box.id} className="box223">
          <img src={box.image} alt={`Box ${box.id}`} />
          <p>{box.label}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;
