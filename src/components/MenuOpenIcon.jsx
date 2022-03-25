import { useContext } from "react"
import AppContext from "../context/appContext"

const MenuOpen = () => {
  const { handleOpenMenu } = useContext(AppContext)

  return (
    <svg onClick={() => handleOpenMenu(true)} className="header__icon-cursorPointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default MenuOpen