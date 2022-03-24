
const BtnReview = ({ id, active, handleBtnSlider }) => {
  return (
    <>
      <li onClick={() => handleBtnSlider(id)} className={`punto ${active && "active"}`}></li>
    </>
  )
}

export default BtnReview