import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
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
  )
}

export default HeaderSocials
