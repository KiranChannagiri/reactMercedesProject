
import teamImg from "../assets/images/aboutImage.jpg"
const About = () => {
  return (
     <div className="about-container">
      <div className="about-image">
        <img src={teamImg} alt="Mercedes AMG Petronas F1 Team" />
      </div>

      <div className="about-content">
        <h1>Mercedes-AMG PETRONAS Formula One Team</h1>

        <p>
          Mercedes-AMG PETRONAS Formula One Team is one of the most successful
          teams in Formula 1 history. Based in Brackley, United Kingdom, the
          team is known for innovation, speed, and excellence.
        </p>

        <p>
          The Silver Arrows dominated Formula 1 by winning eight consecutive
          Constructors' Championships from 2014 to 2021.
        </p>

        <h2>Current Drivers</h2>
        <ul>
          <li>George Russell</li>
          <li>Andrea Kimi Antonelli</li>
        </ul>

        <h2>Team Principal</h2>
        <p>Toto Wolff</p>

        <h2>Mission</h2>
        <p>
          To push the boundaries of technology and performance while competing
          at the highest level of motorsport.
        </p>
      </div>
    </div>
  )
}

export default About