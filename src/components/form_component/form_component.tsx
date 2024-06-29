import "./form_component.scss"

const FormComponent = () => {
  return (
    <div className="contact-form-container">
      <h2>Contactar</h2>
      <p>¿Tienes preguntas? Estamos aqui para ayudar. Envia un mensaje y responderemos lo antes posible.</p>
      <form style={{width:"300px", height:"300px", marginTop:"20px"}} >
        <div className="form-group">
          <input type="text" placeholder="Nombre" className="contact-input" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="contact-input" />
        </div>
        <textarea placeholder="Tu mensaje" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </div>
  );
};

export default FormComponent;
