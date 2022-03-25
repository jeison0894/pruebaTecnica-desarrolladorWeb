import { useContext } from "react"
import logoCompany from "../assets/img/logoCompany.svg"
import AppContext from "../context/appContext"
import Equix from "./Equix"
import Rayas from "./Rayas"

const Header = () => {
  const { openMenu } = useContext(AppContext)

  return (
    <header className="headerMenu">
      {openMenu ? <Equix /> : < Rayas />}

      <img src={logoCompany} alt="logo de la empresa" />

      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

    </header>
  )
}

export default Header

