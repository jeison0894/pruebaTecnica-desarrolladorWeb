import logoFooter from "../assets/img/logoFooter.svg"

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="logo footer" />
      <p>La Mente es Maravillosa is a property of Grupo MContigo© 2012 - 2020. All rights reserved.
        Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.
      </p>
    </footer>
  )
}

export default Footer