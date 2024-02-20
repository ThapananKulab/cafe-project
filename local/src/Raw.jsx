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
  const [raws, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://cafe-project-server11.onrender.com/api/raws')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
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
      <h1>รายชื่อเมนู</h1>

      {/* Display the products */}
      <ul>
        {raws.map((raw) => (
          <li key={raw._id}>
            {`ID: ${raw._id} ชื่อวัตถุดิบ: ${raw.rawname}`}
          </li>
        ))}
      </ul>
    </StyledDiv>
  )
}

export default Example
