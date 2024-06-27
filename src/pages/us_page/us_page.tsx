import Header from "../../components/header/header"
import Us from "../../components/us/us"
import './us_page.scss'
import gimImage from "../../assets/gym1.jpg"
import Lourdesimg from "../../assets/LOURDES.jpg"
import Carlosimg from "../../assets/CARLOS.jpg"

const UsPage = () => {
  return (
    <div className="us_page">
      <Us />
      <Header />
      <div className="hero-image">
        <img src={gimImage} alt="Gym" />
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
          <img src="/mnt/data/IMG_4062.jpg" alt="Personal 3" className="staff-photo"/>
          <div className="staff-description">
            <h3>Nombre del Personal 3</h3>
            <h4>Descripción del Personal 3</h4>
            <p>Descripción adicional del Personal 3</p>
          </div>
        </div>

        <div className="staff-member">
          <img src="/mnt/data/IMG_4062.jpg" alt="Personal 4" className="staff-photo"/>
          <div className="staff-description">
            <h3>Nombre del Personal 4</h3>
            <h4>Descripción del Personal 4</h4>
            <p>Descripción adicional del Personal 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsPage
