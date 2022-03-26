import { useContext } from "react"
import AppContext from "../context/appContext"
import ilustration from "../assets/img/ilustration.svg"

const Newsletter = () => {
  const { handleModal } = useContext(AppContext)

  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <div className="newsletter__container">
          <img className="newsletter__ilustration" src={ilustration} alt="" />
          <div>
            <h2 className="newsletter__title">Suscríbete a nuestro newsletter</h2>
            <p className="newsletter__text">Mantente al tanto del lanzamiento de nuevos artículos.</p>
            <button className="newsletter__button" onClick={() => handleModal(true)}>Suscribirse</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
