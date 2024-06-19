//import { useState, useEffect } from 'react';
import Header from "../../components/header/header";
import Carousel from '../../components/carousel/carousel';
import './home_page.scss';
import GeocodingComponent from "../../components/GeocodingComponent/GecodingComponet"
import gimImage from "../../assets/gym1.jpg"
const HomePage = () => {
  return (
    <div className="home_page">
      <Carousel />
      <Header />
      <div style={{display:"flex", marginTop:"1px"}}>
 <img src={gimImage} style={{height:"250px"}}/>

      </div>
      <div style={{display:"flex", border:"2px solid red", marginTop:"30px"}} >
        <p style={{marginTop:"10px"}}>
          Dónde, cómo y por qué apliques una fuerza es la diferencia entre un gran beneficio o un proceso doloroso.
          Aquí somos especialistas en despejar esas preguntas para que tu entrenamiento sea seguro, eficaz y, sobre todo, el que tú necesites.
        </p>
      </div>
      <div style={{display:"flex", marginTop:"20px"}}>
           <GeocodingComponent />
      </div>
    
    </div>
  );
};

export default HomePage;
