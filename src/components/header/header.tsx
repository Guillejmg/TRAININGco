import logo_vector from '../../assets/logo_vector.png'
import Navbar from '../navbar/navbar';
import './header.scss'
const Header = () => {
  return(
    <>
      <div className="header">
        <Navbar/>
        <div className="header_corner">
          <img className="header_corner_img"  src={logo_vector} alt="logo" />
        </div>
      </div>
    </>
  )
}
export default Header;
