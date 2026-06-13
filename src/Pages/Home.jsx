import heroImage from "../assets/images/heroImage.webp"
import mbCar from "../assets/images/MBAMGFOneCar.jpg"

const Home = () => {
  return (
   <div className="home">
      <div className="hero">
        <img
          src={heroImage}
          alt="Mercedes F1"
          className="hero-img"
        />

        <div className="hero-content">
          <h1>Mercedes-AMG Petronas <span className="text-teal">Formula One Team</span></h1>

          <p>
            A legacy of speed, innovation, and championship-winning
            performance. Explore the world of Formula One through the
            Mercedes-AMG Petronas F1 Team.
          </p>

          <button className="btn-primary">Explore Team</button>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="info-grid">
            <div className="info-text">
              <h2>Built For <span className="text-teal">Victory</span></h2>
              <p>
                Mercedes-AMG Petronas has established itself as one of the most
                dominant teams in Formula One history, combining cutting-edge
                engineering, world-class drivers, and relentless pursuit of
                excellence.
              </p>
              <p className="text-grey">
                From the legendary Silver Arrows to the modern hybrid era,
                our commitment to innovation drives every millisecond on the track.
              </p>
            </div>
            <div className="info-image">
               <img src={mbCar} alt="Mercedes F1 Car" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-grey">
        <div className="container">
          <h2 className="text-center">Latest <span className="text-teal">News</span></h2>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-img" style={{background: 'var(--bg-medium-grey)'}}></div>
              <h3> la Propulsion</h3>
              <p className="text-grey">Discover the latest advancements in hybrid power unit efficiency for the upcoming season.</p>
              <a href="#" className="text-teal">Read More →</a>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'var(--bg-medium-grey)'}}></div>
              <h3>Aero Innovation</h3>
              <p className="text-grey">Exploring the new wind tunnel regulations and their impact on the W15 chassis design.</p>
              <a href="#" className="text-teal">Read More →</a>
            </div>
            <div className="news-card">
              <div className="news-img" style={{background: 'var(--bg-medium-grey)'}}></div>
              <h3>Driver Updates</h3>
              <p className="text-grey">A deep dive into the training regimens of our championship contenders.</p>
              <a href="#" className="text-teal">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container text-center cta-section">
          <h2>Join the <span className="text-teal">Silver Arrows</span></h2>
          <p className="text-grey">Stay updated with the latest race results, technical insights, and team news.</p>
          <button className="btn-primary">Subscribe Now</button>
        </div>
      </section>
    </div>
  )
}

export default Home