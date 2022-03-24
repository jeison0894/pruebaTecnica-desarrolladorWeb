import { useRef, useState } from "react"
import BtnReview from "./BtnReview"
import Review from "./Review"

const arrBotones = [
  {
    id: 0,
    active: true
  },
  {
    id: 1,
    active: false
  },
  {
    id: 2,
    active: false
  },
]

const Reviews = () => {
  const wrapper = useRef()
  const [listaBotonesSlider, setListaBotonesSlider] = useState(arrBotones)

  const handleBtnSlider = (indexBtn) => {

    const botonActive = listaBotonesSlider.map(boton => ({ ...boton, active: boton.id === indexBtn ? true : false }))
    setListaBotonesSlider(botonActive);

    let posicion = indexBtn
    let desplazamiento = posicion * -33.3
    wrapper.current.style.transform = `translateX(${desplazamiento}%)`

  }

  return (
    <div className="carrousel">
      <div className="wrapper" ref={wrapper}>
        <Review />
        <Review />
        <Review />
      </div>

      <ul className="puntos">
        {listaBotonesSlider.map(({ id, active }) => <BtnReview key={id} id={id} active={active} handleBtnSlider={handleBtnSlider} />)}
      </ul>
    </div>
  )
}

export default Reviews


