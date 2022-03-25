import { useContext } from "react"
import AppContext from "../context/appContext"

const Newsletter = () => {
  const { handleModal } = useContext(AppContext)

  return (
    <section className="newsletter">
      <h2>Suscribete a nuestro newsletter</h2>
      <p className="newsletter__text">Mantente al tanto del lanzamiento de nuevos articulos.</p>
      <button className="newsletter__button" onClick={() => handleModal(true)}>Suscribirse a nuestro newsletter</button>
    </section>
  );
};

export default Newsletter;
