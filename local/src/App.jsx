import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Product from './Product'
import User from './User'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: '/Dashboard',
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },
  {
    path: '/Product',
    element: (
      <div>
        <Product />
      </div>
    ),
  },
  {
    path: '/User',
    element: (
      <div>
        <User />
      </div>
    ),
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
