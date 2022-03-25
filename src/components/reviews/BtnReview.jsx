
const BtnReview = ({ id, active, handleBtnSlider }) => {
  return (
    <>
      <li onClick={() => handleBtnSlider(id)} className={`carrousel__button ${active && "carrousel__button--active"}`}></li>
    </>
  )
}

export default BtnReview