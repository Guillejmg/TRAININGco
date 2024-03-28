import { useState } from 'react';
import './hamburger_button.scss'
const HamburgerButton = () => {

const [isClicked, setIsClicked] = useState(false);

  const handleMenu = () => {
    setIsClicked(!isClicked)
  }

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
        </div>
    </>
  )
}
export default HamburgerButton;
