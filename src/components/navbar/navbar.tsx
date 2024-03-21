import {Link} from 'react-router-dom'
import IMG_1335 from '../../assets/IMG_1335.jpg'
import './navbar.scss'

const Navbar = ()=>{
  return (
    <>
      <ul  className='navbar'>
        <li><Link className='navbar_link' to="/home">HOME</Link></li>
        <li><Link className='navbar_link' to="/services">QUÉ OFRECEMOS</Link></li>
        <li><Link className='navbar_link' to="/us">NOSOTROS</Link></li>
        <li><Link className='navbar_link' to="/contact">CONTÁCTANOS</Link></li>
        <li className='navbar_img'><img  src={IMG_1335} alt="TRAININGco" /></li>
      </ul>
    </>
  )
}

export default Navbar
