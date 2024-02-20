import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/authen') // Assuming this is the correct endpoint to check authentication
      .then(res => {
        if (res.data.status === 'ok') {
          // Authentication successful
          setAuth(true);
          // Navigate to the login page (make sure you have 'Navigate' imported from 'react-router-dom')
          Navigate('/login');
        } else {
          // Authentication failed
          setAuth(false);
          setMessage(res.data.message);
        }
      })
      .catch(err => console.error(err));
  }, []); // Pass an empty dependency array to run this effect only once when the component mounts

  return (
    <div>
      {/* Render content based on authentication status */}
      {auth ? <h3>Welcome, {name}</h3> : <h3>{message}</h3>}
    </div>
  );
}

export default Home;
