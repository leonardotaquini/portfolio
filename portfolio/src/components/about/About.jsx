import React from 'react'
import { Navbar } from '../navbar/Navbar'
import './about.css'
import Flip from 'react-reveal/Flip';
import  { Autoplay, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import { FaReact, FaJava, FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiSpringboot, SiMysql } from "react-icons/si";




export const About = () => {
  return (
    <>
    <div className='d-flex flex-column about-container'>
        <Navbar/>
        <div className='m-auto'> 
            <h2 className='text-white text-center'>
            <Flip left cascade>
              Sobre Mi
            </Flip>
            </h2>
            <div className='text-white w-50 m-auto text-center py-4'>
                <p>Soy un estudiante de programacion web Full Stack, ( Java en el backend y React Js en el FrontEnd ) Me considero apasionado por el aprendizaje de nuevas tecnologias y el trabajo en equipo.</p>        
            </div>
            <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay:1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        className='d-flex col-12 container icons-container'    
      >
        <SwiperSlide className='text-center text-primary'>
          <FaReact/>
        </SwiperSlide>
        <SwiperSlide className=' text-center text-danger'>
          <FaJava/>
        </SwiperSlide>
        <SwiperSlide className='text-warning text-center js'>
         <DiJavascript1/>
        </SwiperSlide> 
        <SwiperSlide className='text-center spring'>
          <SiSpringboot/>
        </SwiperSlide> 
        <SwiperSlide className='text-info text-center mysql text-info'>
          <SiMysql/>
        </SwiperSlide>
        <SwiperSlide className=' text-center bootstrap'>
          <FaBootstrap/>
        </SwiperSlide>
      </Swiper>
        </div>

    </div>
    </>
  )
}
