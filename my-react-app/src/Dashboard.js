import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const navigate = useNavigate();

  const goToStockPage = () => {
    navigate('/medicine-stock');
  };

  return (
    <div>
      <h1>User Page</h1>
      <button onClick={goToStockPage}>Go to Stock Page</button>
    </div>
  );
}

export default UserPage;
