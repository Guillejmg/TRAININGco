import video_ej from '../../assets/video_ej.mp4'
import logo_vector from '../../assets/logo_vector.png'

import { useTypewriter, Cursor } from 'react-simple-typewriter' 

import './opening.scss'

export function Opening (){
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
        <button type='button'>
          <div className='video_button_text'>Pulsa la imagen</div> 
          <img src={logo_vector} />
          <span> Somos {text}<Cursor cursorStyle= '<'/></span>
          
        </button>

      </div>
    </div>
  )
}
