import { useState, createContext } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = (isOpen) => {
    setOpenMenu(isOpen)
    document.body.style.overflow = `${isOpen ? "hidden" : ""}`
  }

  const data = { openMenu, handleOpenMenu }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export default AppContext
export { AppProvider }