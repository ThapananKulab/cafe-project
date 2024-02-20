import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3333/api/authen')
      .then(res => {
        if (res.data.status === 'ok') {
          // Authentication successful
          setAuth(true);
        } else {
          // Authentication failed
          setAuth(false);
          setMessage(res.data.message);
        }
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  }, []); // Add an empty dependency array to avoid infinite loop

  return (
    <div>
      {/* Render content based on authentication status */}
      {auth ? <h3>Welcome, {name}</h3> : <h3>{message}</h3>}
    </div>
  );
}

export default Home;
