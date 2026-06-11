
import brakely from "../assets/images/Brackley_header.webp"
const Contact = () => {
  return (
   <div className="contact-container">
      <div className="contact-image">
        <img src={brakely} alt="Mercedes Garage" />
      </div>

      <div className="contact-content">
        <h1>Contact Us</h1>

        <p>
          Mercedes-AMG PETRONAS Formula One Team
          <br />
          Brackley, Northamptonshire
          <br />
          United Kingdom
        </p>

        <p>Email: info@mercedesamgf1.com</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact