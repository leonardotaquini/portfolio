import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className='alert alert-danger d-flex col-12 align-items-center justify-content-between'>
        <span className='text-center m-auto'>Pagina no encontrada</span>
        <Link to='/' className='btn btn-outline-dark'>Volver</Link>
    </div>
  )
}
