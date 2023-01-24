import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_q1v2hgb',
      'template_lj4csfl',
      form.current,
      'w6PSHVyGDgrN7t3wiye1L',
    )
    e.target.reset()
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>Simon_a@hotmail.com</h5>
            <a href="mailto:Simon_a@hotmail.com" target="_black">
              Send a messange
            </a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon" />
            <h4>Messanger</h4>
            <h5>Simon</h5>
            <a href="https://m.me/simon.andersson.1447" target="_black">
              Send a messange
            </a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact_icon" />
            <h4>Wasup</h4>
            <h5>+46702867023</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+46702867023"
              target="_black"
            >
              Send a messange
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="Message" placeholder="Message" required rows="7" />
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
