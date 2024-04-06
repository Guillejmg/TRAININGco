import { useState } from 'react';
import './hamburger_button.scss'
import Navbar from '../navbar/navbar';
//import React from 'react';

//const actionContext = React.createContext();
const HamburgerButton: React.FC = () => {

const [isClicked, setIsClicked] = useState(false);

  const handleMenu= () => {
    setIsClicked(!isClicked)
  }

  //<actionContext.Provider value={isClicked}></actionContext.Provider>

  return(
    <>
        <div 
          className="hamburger"
          onClick={handleMenu}>
          <div  
          className={
            `hamburger__container ${isClicked === true ? 'hamburger__container--animated' : ''}`
            }>
          </div>
            {isClicked  === true &&(
                  <Navbar/>
              )}
        </div>
    </>
  )
}
export default HamburgerButton;
