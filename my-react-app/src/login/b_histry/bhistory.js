import React, { useEffect, useState } from "react";
//import "./Stock.css";
import { useNavigate } from 'react-router-dom';
// 


const Modal = ({ isOpen, onClose, onSave, selectedProduct }) => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");



  useEffect(() => {
    if (!isOpen) {
      // Clear form fields when the modal is closed
      setProductName("");
      setPrice("");
      setQuantity("");
    }
  }, [isOpen]);









  useEffect(() => {
    if (selectedProduct) {
      // Prepopulate fields if updating
      setProductId(selectedProduct.id);
      setProductName(selectedProduct.product_name);
      setPrice(selectedProduct.price.toString());
      setQuantity(selectedProduct.quantity.toString());
    } else {
      // Clear form fields when adding a new product
      setProductName("");
      setPrice("");
      setQuantity("");
    }
  }, [selectedProduct]);







  const handleSave = () => {
    const productData = {
      id: selectedProduct?.id, // Include ID if updating
      product_name: productName,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };
    onSave(productData); // Call the onSave function passed from the parent
    onClose(); // Close the modal
  };







  

  if (!isOpen) return null;

  return (
    <div className="modal1">
      <div onClick={onClose} className="overlay1"></div>
      <div className="modal-content1">
        <h2>{selectedProduct ? "Update Product" : "Add New Product"}</h2>
        <form className="modal-form1">


        {selectedProduct ? <label>
            Product ID:
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              readOnly 
            />
          </label> : " "}



          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>
          <div className="modal-buttons1">
              {selectedProduct ? <button type="button" className="done-modal1" onClick={handleSave}> Update</button> : <button type="button" className="done-modal1" onClick={handleSave}> Add New</button> }
            <button type="button" className="close-modal1" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};





// Stock Component
const Stock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track the product being edited
  const navigate = useNavigate();



  useEffect(() => {
    fetch("http://localhost:8083/bill/getallbills")
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
      product.id.toString().includes(searchQuery)
  );




  

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete the product with ID: ${id}?`)) {
      fetch(`http://localhost:8083/bill/delete/${id}`, {
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







  const handleUpdate = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setSelectedProduct(productToEdit);
    setModalOpen(true);
  };








  const handleSave = (productData) => {
    const method = productData.id ? "PUT" : "POST";
    const url = productData.id ? `http://localhost:8081/M_Update/${productData.id}` : "http://localhost:8081/M_Add";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((savedProduct) => {
        if (productData.id) {
          setProducts(products.map((product) =>
            product.id === productData.id ? savedProduct : product
          ));
        } else {
          setProducts([...products, savedProduct]);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };









  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (!modalOpen) {
      setSelectedProduct(null); // Clear selected product when closing the modal
    }
    document.body.classList.toggle('active-modal1', modalOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }






  const go_bill_page = () => {
    navigate('/login/addbill');
  }















  return (
    <div className="stock-page1">
      <Modal
        isOpen={modalOpen}
        onClose={toggleModal}
        onSave={handleSave}
        selectedProduct={selectedProduct}
      />
      <div className="search-container1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Bill ID"
          className="search-input1"
        />
        <button onClick={go_bill_page} className="search-button1">
          Add Bill
        </button>
      </div>
      <div className="stock-table-container1">
        <table className="stock-table1">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Bill ID</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "20%" }}>Date</th>
              <th style={{ width: "20%" }}>Number Of Product</th>
              <th style={{ width: "20%" }}>Total Price</th>
              <th style={{ width: "10%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.dates}</td>
                <td>{product.times}</td>
                <td>{product.n_of_product}</td>
                <td>{product.total_price}</td>
                <td>
                    {/** 
                  <button
                    onClick={() => handleUpdate(product.id)}
                    className="update-button1"
                  >
                    Update
                  </button> */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-button1"
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

export default Stock;
