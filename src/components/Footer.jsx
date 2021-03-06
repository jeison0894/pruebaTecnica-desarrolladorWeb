import logoFooter from "../assets/img/logoFooter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img width="190" height="32" className="footer__img" src={logoFooter} alt="logo footer" />
        <p className="footer__text">La Mente es Maravillosa is a property of Grupo MContigo© 2012 - 2020. All rights reserved.
          Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
        </p>
      </div>
    </footer>
  )
}

export default Footer