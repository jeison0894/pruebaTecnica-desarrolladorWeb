import articleImage from "../assets/img/articleImage.jpg"

const Article = () => {
  return (
    <article className="article">
      <img className="article__img" src={articleImage} alt="Imagen del articulo" />
      <p className="article__tag">Curiosidades</p>
      <h2>¿Qué sería de nuestro mundo sin arte ni cultura?</h2>
    </article>


  )
}

export default Article