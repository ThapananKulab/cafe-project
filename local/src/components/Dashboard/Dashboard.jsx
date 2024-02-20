import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3333/api/authen')
      .then(res => {
        if (res.data.status === 'ok') {
          setAuth(true);
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

export default Dashboard;
