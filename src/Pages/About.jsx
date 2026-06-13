import teamImg from "../assets/images/aboutImage.jpg"

const About = () => {
  return (
     <div className="about">
      <section className="section-padding">
        <div className="container">
          <div className="about-hero">
            <div className="about-text">
              <h1>The <span className="text-teal">Silver Arrows</span></h1>
              <p>
                Mercedes-AMG PETRONAS Formula One Team is one of the most successful
                teams in Formula 1 history. Based in Brackley, United Kingdom, the
                team is known for innovation, speed, and excellence.
              </p>
              <p className="text-grey">
                The Silver Arrows dominated Formula 1 by winning eight consecutive
                Constructors' Championships from 2014 to 2021, setting a benchmark
                for precision engineering and strategic brilliance.
              </p>
            </div>
            <div className="about-image">
              <img src={teamImg} alt="Mercedes AMG Petronas F1 Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-grey">
        <div className="container">
          <h2 className="text-center">Our <span className="text-teal">Champions</span></h2>
          <div className="drivers-grid">
            <div className="driver-card">
              <div className="driver-info">
                <h3>George Russell</h3>
                <p className="text-grey">Driver #63</p>
                <button className="btn-outline">View Stats</button>
              </div>
            </div>
            <div className="driver-card">
              <div className="driver-info">
                <h3>Andrea Kimi Antonelli</h3>
                <p className="text-grey">Driver #11</p>
                <button className="btn-outline">View Stats</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="about-footer-grid">
            <div className="footer-item">
              <h2>Team Principal</h2>
              <p className="text-teal">Toto Wolff</p>
              <p className="text-grey">Leading the team with a vision of relentless improvement and strategic dominance.</p>
            </div>
            <div className="footer-item">
              <h2>Our Mission</h2>
              <p>
                To push the boundaries of technology and performance while competing
                at the highest level of motorsport.
              </p>
              <p className="text-grey">
                Integrating sustainable fuels and advanced aerodynamics to define the future of racing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About