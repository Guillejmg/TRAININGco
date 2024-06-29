import Header from "../../components/header/header"
import Us from "../../components/us/us"
import './us_page.scss'
import gim2 from "../../assets/IMG_3836.jpg"
import Lourdesimg from "../../assets/LOURDES.jpg"
import Carlosimg from "../../assets/CARLOS.jpg"
import Estebaimg from "../../assets/ESTEBAN.jpg"
import Miguelimg from "../../assets/MIGUEL.jpg"
// Import GoogleReviews from "../../Reviews_Google/ReviewsComponent"
const UsPage = () => {
  return (
    <div className="us_page">
      <Us />
      <Header />
      <div className="hero-image">
        <img src={gim2} alt="Gym" />
      </div>
      <div className="team-title">
        <h1 style={{color:"white"}}>CONOCE AL EQUIPO</h1>
        </div>

      <div className="staff-profile">
        <div className="staff-member">
          <img src={Carlosimg} alt="Personal 1" className="staff-photo"/>
          <div className="staff-description">
          <h3>CARLOS</h3>
            <h4>READAPTADOR DE LESIONES Y DIRECTOR</h4>
            <p>GRADUADO EN CC DE LA ACTIVIDAD FÍSICA Y EL DEPORTE</p>
            <p>MÁSTER EN ENTRENAMIENTO PERSONAL Y RENDIMIENTO</p>
            <p>ESPECIFICOS EN READAPTACIÓN Y PREVENCIÓN DE LESIONES</p>
          </div>
        </div>

        <div className="staff-member">
          <img src={Lourdesimg} alt="Personal 2" className="staff-photo"/>
          <div className="staff-description">
            <h3>LOURDES</h3>
            <h4>PREPARADORA FÍSICA Y ENTRENAMIENTO ONCOLÓGICO</h4>
            <p>GRADUADA EN CC DE LA ACTIVIDAD FÍSICA Y EL DEPORTE</p>
            <p>MÁSTER EN ACTIVIDAD FÍSICA Y CALIDAD DE VIDA</p>
            <p>FORMACIÓN EN DISEÑO DE PROGRAMAS DE EJERCICIO EN CÁNCER Y ENFERMEDAD RENAL</p>
          </div>
        </div>

        <div className="staff-member">
          <img src={Estebaimg} alt="Personal 3" className="staff-photo"/>
          <div className="staff-description">
            <h3>ESTEBAN</h3>
            <h4>CROSSTRAINING & HIT</h4>
            <p>GRADUADO EN CC DE LA ACTIVIDAD FÍSICA Y EL DEPORTE</p>
            <p>EUROPEAN QUALIFIER NETWORK. ENTRENAMIENTO PERSONAL Y FUERZA</p>
            <p>PREPARADOR FÍSICO DE FÚTBOL</p>
          </div>
        </div>

        <div className="staff-member">
          <img src={Miguelimg} alt="Personal 4" className="staff-photo"/>
          <div className="staff-description">
            <h3>MIGUEL</h3>
            <h4>ANÁLISIS DEL MOVIMIENTO Y ENTRENAMIENTO ADAPTADO</h4>
            <p>GRADUADO EN CC DE LA ACTIVIDAD FÍSICA Y EL DEPORTE</p>
            <p>MASTER EN FISIOTERAPIA Y FISIOLOGIA DEL DEPORTE</p>
          </div>
        </div>
        <div>
        {/* <GoogleReviews/> */}
        </div>
      </div>
    </div>
  )
  /* <div className="us">
        <p>a ver que tal queda</p>
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
    </>*/
}

export default UsPage
