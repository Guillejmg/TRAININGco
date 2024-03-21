import './carousel.scss'
import gym1 from '../../assets/gym1.jpg'
const Carousel = () => {
  return(
    <>
      <div className="carousel">
        <img className="carousel_img1" src={gym1} alt="imagen del gimnasio" />
      </div>
    </>
  )
}
export default Carousel;
