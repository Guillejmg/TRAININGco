import './carousel.scss'
import gym1 from '../../assets/gym1.jpg'
import gym2 from '../../assets/gym2.jpg'
const Carousel = () => {

  // Para implantar un carusel interactuvo y  escalable con puntos debemos usar un archivo jason.db en assets, usar useRef (https://www.youtube.com/watch?v=oNROv1-ZLOY, https://www.youtube.com/watch?v=3Eg_V06pYn8 ), y luego usar un  map  que luego enlazaremos con  la logica  de .forEach() (https://www.youtube.com/watch?v=2CEptqw-bSQ)
  
  return(
    <>
      <div className="carousel">
        <ul className='carousel__list'>
          <li className='carousel__list-1'>
            <img className="carousel__img1" src={gym1} alt="imagen del gimnasio 1" />
          </li>
          <li className='carousel__list-2'>
            <img className="carousel__img2" src={gym2} alt="imagen del gimnasio 2" />
          </li>
          <li className='carousel__list-3'>
            <img className="carousel__img3" src={gym1} alt="imagen del gimnasio 3" />
          </li>
        </ul>
        {/* <ul className="carousel__point" ref= {pictureList}>
          <li className="carousel__point-size" onClick={handlePicture} ref= {picturePoint}></li>
          <li className="carousel__point-size" onClick={handlePicture} ref= {picturePoint}></li>
          <li className="carousel__point-size" onClick={handlePicture} ref= {picturePoint}></li>
        </ul> */}
      </div>
    </>
  )
}
export default Carousel;
