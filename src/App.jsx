import "./sass/generalStyles.scss"
import Header from "./components/Header"
import Articles from "./components/Articles"
import Form from "./components/Form"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Articles />
        <Form />
      </main>
    </>
  )
}

export default App