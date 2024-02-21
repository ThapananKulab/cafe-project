import React,{ useState,useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const Dashboard= () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://cafe-project-server11.onrender.com/api/authen', {
          // const response = await fetch('http://localhost:3333/api/authen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.status === 'ok') {

        } else {
          localStorage.removeItem('token');
          navigate('/*');
        }
      } catch (error) {
        console.error('Error:', error.status);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate()
  
  // const handleLogout = () => {
  //   const token = localStorage.getItem('token');
  //   console.log('Current token:', token);
  //   localStorage.removeItem('token');
  //   navigate('/');
  // };

  return (
 <div>
  สวัสดี
 </div>
  )
}
export default Dashboard

// import React from 'react'

// function App() {
//   return <h1> Hello World! </h1>
// }

// export default App
