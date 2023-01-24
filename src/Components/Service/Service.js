import './Service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id="service">
      <h5>What im offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Webb Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Contect Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsim dolor sit amet elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
