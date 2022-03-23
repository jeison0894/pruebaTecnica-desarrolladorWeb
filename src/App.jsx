import "./sass/generalStyles.scss"
import Header from "./components/Header"
import Articles from "./components/Articles"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Articles />
      </main>
    </>
  )
}

export default App