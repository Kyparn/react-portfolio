import CV from '../../Assets/CV.pdf'

const Button = () => {
  return (
    <div className="cta">
      <a href={CV} download className="button">
        Download CV
      </a>
      <a href="#contact" className="button button-primary">
        TALK?
      </a>
    </div>
  )
}

export default Button
