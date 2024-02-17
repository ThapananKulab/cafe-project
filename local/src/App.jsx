import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Product from './Product'

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
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
