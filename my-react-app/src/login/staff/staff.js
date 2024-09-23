import React, { useEffect, useState } from "react";
import "./staff.css";

const Stock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Store product for edit

  useEffect(() => {
    fetch("http://localhost:8082/login/getallusers")
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.email.toLowerCase().includes(searchQuery.toLowerCase())
  );







  const handleDelete = (productId) => {
    // Delete product logic here (API call to backend)
    console.log("Deleting product with ID:", productId);
    
    var  id = productId;

    if (window.confirm(`Are you sure you want to delete the product with ID: ${id}?`)) {
      fetch(`http://localhost:8082/login/delete/${id}`, {
        method: "DELETE",
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setProducts(products.filter(product => product.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
    }
  };




  

  const handleSaveProduct = (productData) => {
    if (productData.id) {
      // Update product logic (API call to backend)
      console.log("Updating product:", productData);
    } else {
      fetch("http://localhost:8082/login/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Added new product:", data);
          setProducts((prevProducts) => [...prevProducts, data]); // Update product list
          setModalOpen(false); // Close modal after adding
          clearForm(); // Clear the form after adding
        })
        .catch((error) => console.error("Error adding product:", error));
    }
  };

  const clearForm = () => {
    setSelectedProduct(null);
  };

  const toggleModal = () => {
    setSelectedProduct(null); // Reset product for adding new
    setModalOpen(!modalOpen);
  };

  return (
    <div className="stock-page">
     
      <Modal
        isOpen={modalOpen}
        onClose={toggleModal}
        onSave={handleSaveProduct}
        selectedProduct={selectedProduct}
      />
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Name or Email"
          className="search-input"
        />
        <button className="search-button" onClick={toggleModal}>
          Add User
        </button>
      </div>

      <div className="stock-table-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th style={{ width: "8%" }}>ID</th>
              <th style={{ width: "40%" }}>Name</th>
              <th style={{ width: "40%" }}>Email</th>
              <th style={{ width: "10%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
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

const Modal = ({ isOpen, onClose, onSave, selectedProduct }) => {
  const [productName, setProductName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.name);
      setEmail(selectedProduct.email);
      setPassword(""); // Reset password field for security
    } else {
      setProductName("");
      setEmail("");
      setPassword("");
    }
  }, [selectedProduct]);




  const handleSave = () => {
    const productData = {
      id: selectedProduct ? selectedProduct.id : null,
      name: productName,
      email: email,
      password: password,
    };
    onSave(productData);
  };




  useEffect(() => {
    if (!isOpen) {
      // Clear form fields when the modal is closed
      setProductName("");
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);






  if (!isOpen) return null;

  return (
    <div className="modal">
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-content">
        <h2>{selectedProduct ? "Update User" : "Add New User"}</h2>
        <form className="modal-form">
          {selectedProduct && (
            <label>
              User ID:
              <input type="text" value={selectedProduct.id} readOnly />
            </label>
          )}
          <label>
            Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="modal-buttons">
            <button type="button" className="done-modal" onClick={handleSave}>
              {selectedProduct ? "Update" : "Add New"}
            </button>
            <button type="button" className="close-modal" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stock;
