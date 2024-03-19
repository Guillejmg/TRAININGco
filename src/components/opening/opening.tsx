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
    <div className='video'>
      <video src={video_ej} autoPlay loop muted/>
      <div className='video_button'>
        <Link to="/home">
          <button type='button'>
            <div className='video_button_text'>Pulsa la imagen</div> 
            <img src={logo_vector} alt='logo'/>
            <span> Somos {text}<Cursor cursorStyle= '<'/></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Opening;
