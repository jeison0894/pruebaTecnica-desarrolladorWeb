import React from 'react'
import Menu from './Menu'

const HamburguerMenu = () => {
  return (
    <nav className='hamburguerMenu'>
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