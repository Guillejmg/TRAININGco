import React from 'react';
import Header from "../../components/header/header";
import FormComponent from "../../components/form_component/form_component";
import GeocodingComponent from "../../components/GeocodingComponent/GecodingComponet"
import LocationComponent from "../../components/LocationComponent/LocationComponent"
import gimImage from "../../assets/gym1.jpg";
import "./contactPage.scss"

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <Header />
      

      <div className="hero-image">
        <img src={gimImage} alt="Gym" />
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <FormComponent />
        </div>
        <div className="contact-map">
          <GeocodingComponent />
          <div className="location-container">
            <LocationComponent />
          </div>
          
      
        </div>
      </div>
  
    </div>
  );
};

export default ContactPage;
