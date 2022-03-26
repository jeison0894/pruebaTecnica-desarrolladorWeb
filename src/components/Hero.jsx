import childrenSmiling from "../assets/hero_imgs/children-smiling.jpg"
import family from "../assets/hero_imgs/family.jpg"
import friends from "../assets/hero_imgs/friends.jpg"
import momAndSon from "../assets/hero_imgs/momandson.jpg"

const Hero = () => {
  return (
    <section className="slider">
      <div className="slider__wrapper">
        <img className="slider__img" src={family} alt="Familia unida" />
        <img className="slider__img" src={childrenSmiling} alt="Niños riendo " />
        <img className="slider__img" src={friends} alt="Amigos compartiendo" />
        <img className="slider__img" src={momAndSon} alt="Amor de madre" />

      </div>
    </section>
  )
}

export default Hero

