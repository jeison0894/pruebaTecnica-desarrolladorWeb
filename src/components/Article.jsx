import articleImage from "../assets/img/articleImage.jpg"

const Article = () => {
  return (
    <article className="article">
      <img src={articleImage} alt="Imagen del articulo" />

      <p className="articleTag">Curiosidades</p>

      <h2>¿Qué sería de nuestro mundo sin arte ni cultura?</h2>

    </article>

  )
}

export default Article