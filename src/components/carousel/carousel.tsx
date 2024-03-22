import './carousel.scss'
import gym1 from '../../assets/gym1.jpg'
import gym2 from '../../assets/gym2.jpg'
const Carousel = () => {
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
        </ul>
      </div>
    </>
  )
}
export default Carousel;
