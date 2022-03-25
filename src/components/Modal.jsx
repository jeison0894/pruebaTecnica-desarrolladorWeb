import reactDom from "react-dom"
import { useContext } from "react"
import AppContext from "../context/appContext"

const Modal = () => {
  const { openModal, handleModal } = useContext(AppContext)

  return (
    reactDom.createPortal(
      <div className={`modalContainer ${openModal && "openModal"}`}>
      <article>
        <svg onClick={() => handleModal(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>

        <h3>¡Te has suscrito a nuestro newsletter
          exitosamente!</h3>
        <p>Ahora te mantendremos al tanto de nuestros ultimos artículos, noticias, enfermedades y demas.</p>
        <button onClick={() => handleModal(false)}>Entendido</button>
      </article>
    </div>, 
    document.getElementById('modal'))

  )
}

export default Modal