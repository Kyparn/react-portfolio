import './Header.css'
import Button from './Button'
import profil from '../../Assets/profil.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I´m</h5>
        <h1>Simon</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Button />
        <HeaderSocials />
        <div className="me">
          <img className="me_img" src={profil} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
