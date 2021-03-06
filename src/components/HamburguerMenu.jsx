import { useContext } from "react"
import AppContext from "../context/appContext"
import Menu from './Menu'

const HamburguerMenu = () => {
  const { openMenu } = useContext(AppContext)

  return (
    <>
      <section className={`main-nav ${openMenu && "main-nav--isOpen"}`}>
        
        <nav className="main-nav__wrapper">
          <input className="main-nav__inputSearch" type="search" name="search" placeholder='Busca artículos, noticias, enfermedades, etc…' />
          <button className="main-nav__buttonSearch" ><span className="main-nav__iconSearch material-icons-round">search</span></button>

          <div className="main-nav__menus-container">
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
          </div>
        </nav>

      </section>
    </>
  )
}

export default HamburguerMenu