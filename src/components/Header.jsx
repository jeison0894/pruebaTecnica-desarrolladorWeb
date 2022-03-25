import { useContext } from "react"
import logoCompany from "../assets/img/logoCompany.svg"
import AppContext from "../context/appContext"
import MenuCloseIcon from "./MenuCloseIcon"
import MenuOpenIcon from "./MenuOpenIcon"

const Header = () => {
  const { openMenu, handleOpenMenu } = useContext(AppContext)

  return (
    <header className="header">
      <nav className="header__nav">
        {openMenu ? <MenuCloseIcon /> : < MenuOpenIcon />}

        <img src={logoCompany} alt="logo de la empresa" />

        <svg onClick={() => handleOpenMenu(true)} className="header__icon-cursorPointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </nav>

    </header>
  )
}

export default Header

