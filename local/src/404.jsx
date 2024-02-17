import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundRedirect = () => {
  let navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [navigate])

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Redirecting to homepage...</p>
    </div>
  )
}
export default NotFoundRedirect
