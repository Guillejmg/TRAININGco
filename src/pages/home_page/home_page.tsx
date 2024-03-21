//import { useState, useEffect } from 'react';
import Header from "../../components/header/header"
import Carousel from '../../components/carousel/carousel';
import './home_page.scss'

const HomePage = () => {
  
  // const [showImage, setShowImage] = useState(false);

  // useEffect(() => {
 
  //   const showImageAfterDelay = setTimeout(() => {
  //     setShowImage(true);
  //   }, 1000); 

  //   return () => clearTimeout(showImageAfterDelay);

  // }, []); 

  // En HTML {showImage && (<componente>)}

  return (
    <div className="home_page">
      <Carousel></Carousel>
      <Header/>
    </div>
  )
}

export default HomePage
