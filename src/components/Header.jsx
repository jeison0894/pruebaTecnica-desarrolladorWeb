import { useContext } from "react"
import logoCompany from "../assets/img/logoCompany.svg"
import AppContext from "../context/appContext"
import MenuCloseIcon from "../assets/img/menu_close.svg"
import MenuOpenIcon from "../assets/img/menu_open.svg"
import searchIcon from "../assets/img/search.svg"

const Header = () => {
  const { openMenu, handleOpenMenu } = useContext(AppContext)

  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__icon-cursorPointer" onClick={() => handleOpenMenu(!openMenu)}><img src={openMenu ? MenuCloseIcon : MenuOpenIcon} alt="" /></button>
        <img height="auto" src={logoCompany} alt="logo de la empresa" />
        <button className="header__icon-cursorPointer" onClick={() => handleOpenMenu(!openMenu)}><img src={searchIcon} alt="" /></button>
      </nav>
    </header>
  )
}

export default Header

