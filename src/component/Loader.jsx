import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner
        variant="success"
        animation="border"
      />
    </div>
  )
}

export default Loader