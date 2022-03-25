import { useRef, useState } from "react"
import Review from "./Review"
import BtnReview from "./BtnReview"

const carrouselArrayButtons = [
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
  const carrouselWrapper = useRef()
  const [listBtns, setListBtns] = useState(carrouselArrayButtons)

  const handleBtnSlider = (indexBtn) => {
    const btnActive = listBtns.map(button => ({ ...button, active: button.id === indexBtn ? true : false }))
    setListBtns(btnActive);
    let position = indexBtn
    let displacement = position * -33.3
    carrouselWrapper.current.style.transform = `translateX(${displacement}%)`
  }

  return (
    <section className="carrousel">
      <div className="carrousel__wrapper" ref={carrouselWrapper}>
        <Review />
        <Review />
        <Review />
      </div>

      <ul className="carrousel__buttons">
        {listBtns.map(({ id, active }) => <BtnReview key={id} id={id} active={active} handleBtnSlider={handleBtnSlider} />)}
      </ul>
    </section>
  )
}

export default Reviews


