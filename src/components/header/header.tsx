import Corner from '../corner/corner';
import Navbar from '../navbar/navbar';
import './header.scss'
const Header = () => {
  return(
    <>
      <div className="header">
        <Navbar/>
        <Corner/>
      </div>
    </>
  )
}
export default Header;
