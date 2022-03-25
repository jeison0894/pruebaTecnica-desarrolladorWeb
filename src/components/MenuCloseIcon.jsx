import { useContext } from "react"
import AppContext from "../context/appContext"

const MenuCloseIcon = () => {
  const { handleOpenMenu } = useContext(AppContext)

  return (
    <svg onClick={() => handleOpenMenu(false)} className="nav__icon-cursorPointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default MenuCloseIcon