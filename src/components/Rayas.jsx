import { useContext } from "react"
import AppContext from "../context/appContext"

const Rayas = () => {
  const { handleOpenMenu } = useContext(AppContext)

  return (
    <svg onClick={() => handleOpenMenu(true)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default Rayas