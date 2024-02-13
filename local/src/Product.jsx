import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

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
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    });
}, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>

      {/* Display the products */}
      <ul>
        {products.map(product => (
          <li key={product._id}>{product.productname}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example;
