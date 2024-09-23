import React, { useState, useEffect } from "react";
import './addbill.css'; // Import the CSS file

function App() {
  const [productId, setProductId] = useState(""); // Product ID input
  const [productName, setProductName] = useState(""); // Product Name input
  const [price, setPrice] = useState(""); // Price input
  const [quantity, setQuantity] = useState(""); // Quantity input
  const [tableData, setTableData] = useState([]); // Store rows of products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState('');

  // Fetch products data
  useEffect(() => {
    fetch("http://localhost:8081/medicine")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Update product details based on search ID
  useEffect(() => {
    const productId = Number(searchId); // Convert searchId to number if IDs are numbers
    const product = products.find(p => p.id === productId);
    if (product) {
      setProductName(product.product_name || '');
      setPrice(product.price || '');
    } else {
      setProductName('');
      setPrice('');
    }
  }, [searchId, products]);

  // Handle form input changes
  const handleProductIdChange = (event) => setProductId(event.target.value);
  const handleProductNameChange = (event) => setProductName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handleSearchChange = (event) => setSearchId(event.target.value);

  // Calculate total sum of all product totals
  const calculateTotalSum = () => {
    return tableData.reduce((acc, product) => acc + product.total, 0);
  };



















  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Function to update the date and time
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);








  const handleLogData = () => {

    const updatedTableData = tableData.map(({ id, ...rest }) => ({
      pid: id,
      ...rest
    }));
    
    //console.log('Updated Table Data:', updatedTableData);

    updatedTableData.forEach((data ) => {
        console.log(data);
    });
    





    //console.log('Table Data:', tableData);
    const rowCount = tableData.length;
    const totalSum = tableData.reduce((acc, product) => acc + product.total, 0);

    //console.log('Number of rows:', rowCount);
    //console.log('Total Sum:', totalSum);
   

    if(totalSum != 0){

    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();


      const productData = {
        //id: selectedProduct ? selectedProduct.id : null,

        id: null,
        n_of_product: rowCount,
        total_price: totalSum,
        dates : formattedDate,
        times : formattedTime
      };
      //console.log(productData);

      onSave(productData); //remove after edit
    }


  };






  const onSave = (productData) => {

    if (productData.id) {
      // Update product logic (API call to backend)
      console.log("Updating product:", productData);
    } else {
      fetch("http://localhost:8083/bill/save", {
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

        })
        .catch((error) => console.error("Error adding product:", error));
    }

    handleClearAll();

  };











  const handleClearAll = () => {
    setTableData([]);
    setProductId("");
    setProductName("");
    setPrice("");
    setQuantity("");
    
  };




  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    if (searchId.trim() && productName.trim() && price > 0 && quantity > 0) {
      const existingProduct = tableData.find((product) => product.id === searchId);

      if (existingProduct) {
        // Update quantity and total if product ID already exists
        const updatedTableData = tableData.map((product) => {
          if (product.id === searchId) {
            const newQuantity = parseInt(product.quantity) + parseInt(quantity);
            const newTotal = newQuantity * parseFloat(price);
            return { ...product, quantity: newQuantity, total: newTotal };
          }
          return product;
        });
        setTableData(updatedTableData);
      } else {
        // Add new product to the table
        const total = parseFloat(price) * parseInt(quantity);
        const newProduct = {
          id: searchId,
          productName,
          price: parseFloat(price),
          quantity: parseInt(quantity),
          total,
        };
        setTableData([...tableData, newProduct]);
      }

      // Clear the input fields
      setProductId("");
      setProductName("");
      setPrice("");
      setQuantity("");
      //searchId("");
    }
  };









  return (
    <div className="container">
      {/* Product Search */}
      <div className="search-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>

      {/* Form to enter new product */}
      <form onSubmit={handleSubmit} className="product-form">
      <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Enter Product ID"
          className="input-box searchids"
        />
        <input
          type="text"
          value={searchId}
          onChange={handleProductIdChange}
          placeholder="Product ID"
          className="input-box hidden-textbox"
          required
        />
        <input
          type="text"
          value={productName}
          onChange={handleProductNameChange}
          placeholder="Product Name"
          className="input-box"
          required
          readOnly
        />
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Price"
          className="input-box"
          required
          min="0"
          readOnly
        />
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Quantity"
          className="input-box"
          required
          min="0"
        />
        <button type="submit" className="submit-button">Add to Table</button>
      </form>

      {/* Table wrapper */}
      <div className="table-container">
        <div className="table-header">
          <table className="product-table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Action</th>
                <th style={{ width: "5%" }}>No</th>
                <th style={{ width: "9%" }}>Product ID</th>
                <th style={{ width: "50%" }}>Product Name</th>
                <th style={{ width: "9%" }}>Price</th>
                <th style={{ width: "6%" }}>Quantity</th>
                <th style={{ width: "10%" }}>Total</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-body">
          <table className="product-table">
            <tbody>
              {tableData.map((product, index) => (
                <tr key={index}>
                  <td style={{ width: "5%" }}>
                    <button
                      className="delete-button"
                      onClick={() => {
                        // Remove product from the table
                        const updatedTable = tableData.filter((_, i) => i !== index);
                        setTableData(updatedTable);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td style={{ width: "4.5%" }}>{index + 1}</td>
                  <td style={{ width: "9%" }}>{product.pid}</td>
                  <td style={{ width: "51%" }}>{product.productName}</td>
                  <td style={{ width: "9%" }}>{product.price.toFixed(2)}</td>
                  <td style={{ width: "6%" }}>{product.quantity}</td>
                  <td style={{ width: "10%" }}>{product.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Total sum row */}
      <div className="total-sum">
        <strong>Total Sum:</strong> <strong>{calculateTotalSum().toFixed(2)}</strong>
      </div>

      <button onClick={handleClearAll} className="clear-button">Clear</button>
      <button className="log-data-button" onClick={handleLogData}>Save Bill</button>
    </div>
  );
}

export default App;
