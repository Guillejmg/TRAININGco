import './us.scss';
import carlos from '../../assets/CARLOS.jpg';
import esteban from '../../assets/ESTEBAN.jpg';
import miguel from '../../assets/MIGUEL.jpg';
import './us.scss'
const Us = () => {
  return(
    <>
      <div className="us">
        <ul className='presentations'>
          <li className='presentations__list'>
            <img className='presentations__img' loading='lazy' src={carlos} alt="carlos" />
            <div className='presentations__each'>
              <h2 className='presentation__name'>Carlos Padial Mariscal</h2>
              <p className='presentations__text'>dncwinwornvowr bvworvbosrnvowrnv</p>
            </div>
          </li>
          <li className='presentations__list'>
            <img className='presentations__img' loading='lazy' src={esteban} alt="esteban" />
            <div className='presentations__each'>
              <h2 className='presentation__name'>Carlos Padial Mariscal</h2>
              <p className='presentations__text'>dncwinwornvowr bvworvbosrnvowrnv</p>
            </div>
          </li>
          <li className='presentations__list'>
            <img className='presentations__img' loading='lazy' src={miguel} alt="miguel" />
            <div className='presentations__each'>
              <h2 className='presentations__name'>Carlos Padial Mariscal</h2>
              <p className='presentations__text'>dncwinwornvowr bvworvbosrnvowrnv</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Us;
