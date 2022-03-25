import "./sass/generalStyles.scss"
import Header from "./components/Header"
import Articles from "./components/Articles"
import Form from "./components/Form"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Reviews from "./components/reviews/Reviews"
import HamburguerMenu from "./components/HamburguerMenu"
import Modal from "./components/Modal"

const App = () => {
  return (
    <>
      {/* <Header />
      <HamburguerMenu />
      <main>
        <Hero />
        <Articles />
        <Form />
        <FAQ />
        <Reviews />
      </main>
      <Footer /> */}
      <Modal />
    </>
  )
}

export default App