import {Link} from 'react-router-dom'
import IMG_1335 from '../../assets/IMG_1335.jpg'
import './navbar.scss'

const Navbar = ()=>{
  return (
    <>
      <ul  className='navbar'>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/services">QUÉ OFRECEMOS</Link></li>
        <li><Link to="/us">NOSOTROS</Link></li>
        <li><Link to="/contact">CONTÁCTANOS</Link></li>
        <img src={IMG_1335} alt="TRAININGco" />
      </ul>
    </>
  )
}

export default Navbar
