import './hamburger_button.scss'
import React, { useState } from 'react';

  export const HamburgerButton: React.FC = () => {

  const [isClicked, setIsClicked] = useState(false);

  return(
    <>
        <div 
          className="hamburger"
          onClick={()=>setIsClicked(!isClicked)}>
          <div  
          className={
            `hamburger__container ${isClicked === true ? 'hamburger__container--animated' : ''}`
            }>
          </div>
        </div>
    </>
  )
}
export default HamburgerButton;
