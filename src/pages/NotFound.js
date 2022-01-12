import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Page not found. Go to <Link to="/">Home</Link> page</p>
  </div>
)

export default NotFound;