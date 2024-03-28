import {Link} from 'react-router-dom'
import IMG_1335 from '../../assets/IMG_1335.jpg'
import './navbar.scss'

const Navbar = ()=>{

  return (
    <> 
        <ul  className='navbar'>
          <div className='navbar__list'>
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
          </div>
        </ul>
    </>
  )
}

export default Navbar
