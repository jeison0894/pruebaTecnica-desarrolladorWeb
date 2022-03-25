import { useContext } from "react"
import AppContext from "../context/appContext"
import Menu from './Menu'

const HamburguerMenu = () => {
  const { openMenu } = useContext(AppContext)

  return (
    <>
      <div className={`hamburguerBackground ${openMenu && "menuIsOpen"}`}>
        <nav className="hamburguerMenu">
          <input type="search" name="search" placeholder='Busca artículos, noticias, enfermedades, etc…' />

          <div className='menuContainer'>
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
            <Menu />
          </div>
        </nav>
      </div>
    </>
  )
}

export default HamburguerMenu