import quoteIcon from '../../assets/img/quoteIcon.svg'

const Review = () => {
  return (
    <article className='review'>
      <img src={quoteIcon} />
      <blockquote>Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</blockquote>
      <cite>~ Maria Montessori ~</cite>
    </article>
  )
}

export default Review