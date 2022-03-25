
const FAQ = () => {
  return (
    <section className="FAQ">
      <details className="FAQ__details">
        <summary className="FAQ__summary">¿Cómo tomar mejores decisiones?</summary>
        <p className="FAQ__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, fusce donec laoreet quam volutpat pellentesque aenean lacus vulputate. Scelerisque fermentum vivamus vel est consectetur.</p>
      </details>

      <details className="FAQ__details" open>
        <summary className="FAQ__summary">¿Cómo tomar mejores decisiones?</summary>
        <p className="FAQ__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, fusce donec laoreet quam volutpat pellentesque aenean lacus vulputate. Scelerisque fermentum vivamus vel est consectetur.</p>
      </details>

      <details className="FAQ__details">
        <summary className="FAQ__summary">¿Cómo tomar mejores decisiones?</summary>
        <p className="FAQ__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, fusce donec laoreet quam volutpat pellentesque aenean lacus vulputate. Scelerisque fermentum vivamus vel est consectetur.</p>
      </details>
    </section>
  )
}

export default FAQ