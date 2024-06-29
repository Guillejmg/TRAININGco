import { useEffect, useState } from 'react';
import Corner from '../corner/corner';
import Navbar from '../navbar/navbar';
import './header.scss'
import IMG_1335 from '../../assets/IMG_1335.jpg'
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/home'){
      setAnimate(true)
    }else{ setAnimate(false)}
  },[location.pathname])
  
  return(
    <>
      <div className="header">
        <div className={`header__navbar ${animate ? 'header__navbar'&&'header__navbar--animation' : ''}`}>
          <img className='header__img' src={IMG_1335} alt="TRAININGco" />
          <div className='header__click'>
            <Navbar/>
          </div>
        </div>
        <Corner/>
      </div>
    </>
  )
}
export default Header;
