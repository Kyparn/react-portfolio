import './About.css'
import ME from '../../Assets/ME.jpg'
import { FiAward } from 'react-icons/fi'
import { TiFolderOpen } from 'react-icons/ti'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>JR</small>
            </article>
            <article className="about_card">
              <TiFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five.
          </p>
          <a href="#contact" className="button button-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
