const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Enviaste satisfactoriamente los siguientes datos:\n Correo: ${e.target.correo.value}\n Opcion: ${e.target.select.value}`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Formulario de contacto</h2>

      <div className="formGroup">
        <label htmlFor="correo">Ingresa tu correo</label>
        <input className="input" type="text" placeholder="Ingresa tu correo" name="correo" />
      </div>

      <div className="formGroup">
        <label htmlFor="select">Selecciona una opcion</label>
        <select className="input select" name="select" id="select">
          <option >Opcion 1</option>
          <option >Opcion 2</option>
          <option >Opcion 3</option>
        </select>
      </div>

      <button >Enviar solicitud</button>


    </form>
  )
}

export default Form