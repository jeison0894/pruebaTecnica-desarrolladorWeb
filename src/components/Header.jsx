import { useContext } from "react"
import logoCompany from "../assets/img/logoCompany.svg"
import AppContext from "../context/appContext"

const Header = () => {
  const { openMenu, handleOpenMenu } = useContext(AppContext)

  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__icon" onClick={() => handleOpenMenu(!openMenu)}>{openMenu ? <span className="material-icons-round">
          close
        </span> : <span className="material-icons-round">
          menu
        </span>}</button>
        <img height="auto" src={logoCompany} alt="logo de la empresa" />
        <button className="header__icon" onClick={() => handleOpenMenu(!openMenu)}>
          <span className="material-icons-round">
            search
          </span></button>
      </nav>
    </header>
  )
}

export default Header

