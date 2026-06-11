import React from 'react'
import heroImage from "../assets/images/heroImage.webp"
const Home = () => {
  return (
   <div className="home">
      <div className="hero">
        <img
          src={heroImage}
          alt="Mercedes F1"
          width={{90%}}
          height={400}
        />

        <div className="hero-content">
          <h1>Mercedes-AMG Petronas Formula One Team</h1>

          <p>
            A legacy of speed, innovation, and championship-winning
            performance. Explore the world of Formula One through the
            Mercedes-AMG Petronas F1 Team.
          </p>

          <button>Explore Team</button>
        </div>
      </div>

      <section className="info">
        <h2>Built For Victory</h2>

        <p>
          Mercedes-AMG Petronas has established itself as one of the most
          dominant teams in Formula One history, combining cutting-edge
          engineering, world-class drivers, and relentless pursuit of
          excellence.
        </p>
      </section>
    </div>
  )
}

export default Home