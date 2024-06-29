import './carousel.scss'
import gimpadi from "../../assets/IMG_3823.jpg"
import gimpadi2 from "../../assets/IMG_3836.jpg"
import gimpadi3 from "../../assets/IMG_3851.jpg"

const Carousel = () => {

  // Para implantar un carusel interactuvo y  escalable con puntos debemos usar un archivo jason.db en assets, usar useRef (https://www.youtube.com/watch?v=oNROv1-ZLOY, https://www.youtube.com/watch?v=3Eg_V06pYn8 ), y luego usar un  map  que luego enlazaremos con  la logica  de .forEach() (https://www.youtube.com/watch?v=2CEptqw-bSQ)
  
  return(
    <>
      <div className="carousel">
        <ul className='carousel__list'>
          <li className='carousel__item1-list'>
            <img className="carousel__img1-list" src={gimpadi} alt="imagen del gimnasio 1" />
          </li>
          <li className='carousel__item2-list'>
            <img className="carousel__img2-list" src={gimpadi2} alt="imagen del gimnasio 2" />
          </li>
          <li className='carousel__item3-list'>
            <img className="carousel__img3-list" src={gimpadi3} alt="imagen del gimnasio 3" />

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
