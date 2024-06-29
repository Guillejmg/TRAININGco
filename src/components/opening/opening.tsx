import video_ej from '../../assets/video_ej.mp4'
import logo_vector from '../../assets/logo_vector.png'

import { useTypewriter, Cursor } from 'react-simple-typewriter' 

import './opening.scss'
import { Link } from 'react-router-dom'

const Opening = () => {
  const [text] = useTypewriter({
    words: ['entrenamiento', 'rehabilitación', 'movilidad', 'trabajo duro', 'constancia', 'mejora'],
    loop: 1000,
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return(
    <div className='opening'>
      <video className='opening__video' src={video_ej} autoPlay loop muted/>
      <div className='opening__interactive'>
        <Link className='opening__link' to="/home">
          <button className='opening__button' type='button'>
            <p className='opening__text'>Pulsa el logo</p> 
            <img className='opening__logo' loading='lazy' src={logo_vector} alt='logo'/>
            <p className='opening__typewriter'> Somos {text} <Cursor cursorStyle= '<'/></p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Opening;
