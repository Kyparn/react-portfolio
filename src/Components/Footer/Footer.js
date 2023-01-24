/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'
import { BsLinkedin, BsStackOverflow, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Simon
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#xperience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_icon">
        <a
          href="https://www.linkedin.com/in/simon-andersson-7b4466204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Kyparn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/17890306/simon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>
    </footer>
  )
}

export default Footer
