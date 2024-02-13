import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function Example() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cafe-project-server11.onrender.com/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
        // Close the loading spinner once data is loaded
        Swal.close();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
        setLoading(false);
        Swal.close();
      });
  }, []);

  if (loading) {
    Swal.showLoading();
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>รายชื่อเมนู</h1>

      {/* Display the products */}
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {`ID: ${product._id} - Name: ${product.productname}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example;
