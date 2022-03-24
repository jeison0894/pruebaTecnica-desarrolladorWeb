import "./sass/generalStyles.scss"
import Header from "./components/Header"
import Articles from "./components/Articles"
import Form from "./components/Form"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Articles />
        <Form />
        <FAQ />
      </main>
    </>
  )
}

export default App