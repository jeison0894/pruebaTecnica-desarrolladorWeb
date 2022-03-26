import { useState, createContext } from "react";

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenMenu = (isOpen) => {
    setOpenMenu(isOpen)
    document.body.style.overflow = `${isOpen ? "hidden" : ""}`
  }

  const handleModal = (isOpen) => {
    setOpenModal(isOpen)
    document.body.style.overflow = `${isOpen ? "hidden" : ""}`
  }

  const data = { openMenu, handleOpenMenu, openModal, handleModal }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export default AppContext
export { AppProvider }