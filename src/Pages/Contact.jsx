import brakely from "../assets/images/Brackley_header.webp"

const Contact = () => {
  return (
   <div className="contact">
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In <span className="text-teal">Touch</span></h2>
              <p>
                We are always looking for the best talent and passionate fans
                to join our journey toward championship glory.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <strong>Headquarters</strong>
                  <p>Brackley, Northamptonshire<br />United Kingdom</p>
                </div>
                <div className="detail-item">
                  <strong>Email</strong>
                  <p>info@mercedesamgf1.com</p>
                </div>
                <div className="detail-item">
                  <strong>Phone</strong>
                  <p>+44 (0) 1234 567 890</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-icon">Instagram</a>
                <a href="#" className="social-icon">X (Twitter)</a>
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">LinkedIn</a>
              </div>
            </div>

            <div className="contact-form-container">
              <img src={brakely} alt="Mercedes Garage" className="contact-header-img" />
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact