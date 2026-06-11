import React from "react";


const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* HERO */}
      <div className="hero">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Mercedes-AMG_F1_W11_EQ_Performance_%282020%29.jpg"
          alt="Mercedes F1 Car"
        />
        <div className="hero-text">
          <h1>Mercedes-AMG PETRONAS F1</h1>
          <p>Speed. Engineering. Excellence.</p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="card">
          <h2>8</h2>
          <p>Titles</p>
        </div>

        <div className="card">
          <h2>120+</h2>
          <p>Wins</p>
        </div>

        <div className="card">
          <h2>300+</h2>
          <p>Podiums</p>
        </div>
      </div>

      {/* DRIVERS */}
      <h2 className="section-title">Drivers</h2>

      <div className="drivers">

        <div className="driver-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Lewis_Hamilton_2018.jpg"
            alt="Driver"
          />
          <h3>Lewis Hamilton</h3>
        </div>

        <div className="driver-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/George_Russell_2020.jpg"
            alt="Driver"
          />
          <h3>George Russell</h3>
        </div>

      </div>

      {/* ABOUT */}
      <div className="about">
        <h2>About Team</h2>
        <p>
          Mercedes-AMG PETRONAS Formula One Team is one of the most dominant
          teams in Formula 1 history, known for engineering excellence and
          championship success.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;