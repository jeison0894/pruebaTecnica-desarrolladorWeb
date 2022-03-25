import { useContext } from "react"
import AppContext from "../context/appContext"

const Newsletter = () => {
  const { handleModal } = useContext(AppContext)

  return (
    <section className="modalBtnContainer">
      <h2>Suscribete a nuestro newsletter</h2>
      <p>Mantente al tanto del lanzamiento de nuevos articulos.</p>
      <button onClick={() => handleModal(true)}>Suscribirse a nuestro newsletter</button>
    </section>
  );
};

export default Newsletter;
