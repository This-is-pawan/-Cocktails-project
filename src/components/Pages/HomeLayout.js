import React from 'react'
import { Link } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
     <h1>HomeLayout</h1>
     <Link to='/About'>About Page</Link>
    </div>
  )
}

export default HomeLayout