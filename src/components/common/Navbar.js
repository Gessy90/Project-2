import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (

    <nav className="navbar is-danger">
      <div className="container">

        <Link className="links" to="/"> Home </Link>
        <Link className="links" to="/schools"> Schools </Link>

      </div>
    </nav>

  )
}

export default Navbar
