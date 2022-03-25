import { useContext } from "react"
import AppContext from "../context/appContext"
import Menu from './Menu'

const HamburguerMenu = () => {
  const { openMenu } = useContext(AppContext)

  return (
    <nav className={`hamburguerMenu ${openMenu && "menuIsOpen"}`}>
      <input type="search" name="search" placeholder='Busca artículos, noticias, enfermedades, etc…' />

      <div className='menuContainer'>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </div>
    </nav>
  )
}

export default HamburguerMenu