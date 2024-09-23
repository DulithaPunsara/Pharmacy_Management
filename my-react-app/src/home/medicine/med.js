import React, { useEffect, useState } from "react";
import "./med.css";

// Stock Component
const Stock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredProducts = products.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="stock-page">
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter Medicine Name"
          className="search-input"
        />
      </div>
      <div className="stock-table-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>NO</th>
              <th style={{ width: "50%" }}>Name</th>
              <th style={{ width: "10%" }}>QTY</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td> {/* Sequential Number */}
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="update-button"
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
