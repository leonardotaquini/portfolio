import React from 'react'
import { Fade } from 'react-reveal';
import { Typewriter } from 'react-simple-typewriter';
import { Navbar } from '../navbar/Navbar';
import './home.css';




export const Home = () => {
    const palabras = ['Desarrollador Web Front End', 'Desarrollador Web Back End'];
  return (
    <>
       
        <div className='home-container d-flex flex-column'>
            <Navbar/>
            <div className='m-auto d-flex align-items-center justify-content-center flex-column'>
                <h2 className='home-text text-center'>
                    <Fade bottom cascade >Hola mi nombre es Leonardo Taquini</Fade>
                </h2>
                <span className='text-white h5 text-center'>Soy {' '}
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        delaySpeed={2000}
                        deleteSpeed={50}
                        words={palabras}/>
                </span>
            </div>
  


        </div>
    </>
  )
}
