import React from 'react'
import { Link, link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    <a className="navbar-brand text-primary text-uppercase" href="./" >Mi tienda gamer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' >inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link --bs-danger-rgb" to='/destacados'>Destacados</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sobre mi
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/contacto' >Contacto</Link></li>
            <li><Link className="dropdown-item" to='/informacion'>informacion</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar