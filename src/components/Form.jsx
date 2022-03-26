const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Enviaste satisfactoriamente los siguientes datos:\n Correo: ${e.target.email.value}\n Opcion: ${e.target.select.value}`)
    e.target.email.value = ""
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Formulario de contacto</h2>

      <div className="form__group">
        <label htmlFor="email">Ingresa tu correo</label>
        <input className="form__input" type="email" placeholder="Ingresa tu correo" name="email" required />
      </div>

      <div className="form__group">
        <label htmlFor="select">Selecciona una opción</label>
        <select className="form__input form__input--select" name="select" id="select">
          <option>Opcion 1</option>
          <option>Opcion 2</option>
          <option>Opcion 3</option>
        </select>
      </div>

      <button className="form__button">Enviar solicitud</button>
    </form>
  )
}

export default Form