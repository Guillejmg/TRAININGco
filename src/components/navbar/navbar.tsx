import {Link, useLocation} from 'react-router-dom'
import IMG_1335 from '../../assets/IMG_1335.jpg'
import './navbar.scss'
import { useEffect, useState } from 'react';

const Navbar = ()=>{

  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/home'){
      setAnimate(true)
    }else{ setAnimate(false)}
  },[location.pathname])
  
  return (
    <>
      <ul  className={`navbar ${animate ? 'navbar'&&'navbar--animation' : ''}`}>
        <li className='navbar__item'>
          <Link className='navbar__link' to="/home">HOME</Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to="/services">QUÉ OFRECEMOS</Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to="/us">NOSOTROS</Link>
        </li>
        <li className='navbar__item'>
          <Link className='navbar__link' to="/contact">CONTÁCTANOS</Link>
        </li>
        <li className='navbar__item navbar__item--img'>
          <img className='navbar__img' src={IMG_1335} alt="TRAININGco" />
        </li>
      </ul>
    </>
  )
}

export default Navbar
