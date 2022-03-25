import quoteSimbol from '../../assets/img/quoteSimbol.svg'

const Review = () => {

  return (
    <article className='carrousel-review'>
      <img src={quoteSimbol} alt="" />
      <blockquote className='carrousel-review__blockquote'>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</blockquote>
      <cite className='carrousel-review__cite'>~ Maria Montessori ~</cite>
    </article>
  )
}

export default Review