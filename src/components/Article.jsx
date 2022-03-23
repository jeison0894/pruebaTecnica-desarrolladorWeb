import articleImage from "../assets/img/articleImage.jpg"
import "../sass/articles.scss"

const Article = () => {
  return (
    <article className="article">
      <img src={articleImage} alt="Imagen del articulo" />

      <p>Curiosidades</p>

      <h2>¿Qué sería de nuestro mundo sin arte ni cultura?</h2>

    </article>

  )
}

export default Article