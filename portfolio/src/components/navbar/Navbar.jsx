import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand text-white" to='/'>Portfolio</Link>
            <button className="navbar-toggler burguer" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icono"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                <div className="navbar-nav text-center">
                    <Link to='/' className="nav-link link" aria-current="page">Inicio</Link>
                    <Link to='/about' className="nav-link link">Sobre mi</Link>
                    <Link to='/work' className="nav-link link">Proyectos</Link>
                    <Link to='/contact' className="nav-link link">Contacto</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
