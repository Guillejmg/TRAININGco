//import { useState, useEffect } from 'react';
import Header from "../../components/header/header"
import Carousel from '../../components/carousel/carousel';
import './home_page.scss'

const HomePage = () => {

  return (
    <div className="home_page">
      <Carousel></Carousel>
      <Header/>
    </div>
  )
}

export default HomePage
