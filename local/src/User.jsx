import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StyledDiv = styled.div`
  font-family: 'Prompt', sans-serif;
`

function Example() {
  const [users, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://cafe-project-server11.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
        // Close the loading spinner once data is loaded
        Swal.close()
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError('Error fetching data. Please try again.')
        setLoading(false)
        Swal.close()
      })
  }, [])

  if (loading) {
    Swal.showLoading()
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <StyledDiv>
      <h1>รายชื่อพนักงาน</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user._id}
          >{` ชื่อ: ${user.firstname} นามสกุล: ${user.lastname}ตำแหน่ง: ${user.role}`}</li>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default Example
