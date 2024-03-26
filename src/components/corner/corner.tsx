import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo_vector from '../../assets/logo_vector.png'
import './corner.scss'

const Corner = () => {

  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/home'){
      setAnimate(true)
    }else{ setAnimate(false)}
  },[location.pathname])

  return(
      <div className={`corner ${animate ? 'corner'&&'animation-active-corner' : 'corner'}`}>
        <img className="corner_img"  src={logo_vector} alt="logo" />
      </div>
  )
}

export default Corner
