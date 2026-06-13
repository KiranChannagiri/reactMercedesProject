import React from "react";
import mbCar from "../assets/images/MBAMGFOneCar.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="section-padding">
        <div className="container">
          {/* HERO */}
          <div className="dash-hero">
            <img
              src={mbCar}
              alt="Mercedes F1 Car"
              className="dash-hero-img"
            />
            <div className="dash-hero-text">
              <h1>Team <span className="text-teal">Telemetry</span></h1>
              <p>Real-time data. Absolute precision.</p>
            </div>
          </div>

          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-tile">
              <h2 className="text-teal">8</h2>
              <p>World Championships</p>
            </div>

            <div className="stat-tile">
              <h2 className="text-teal">120+</h2>
              <p>Race Victories</p>
            </div>

            <div className="stat-tile">
              <h2 className="text-teal">300+</h2>
              <p>Podium Finishes</p>
            </div>
          </div>

          {/* SEASON PROGRESS */}
          <div className="season-tracker">
            <h2 className="text-center">Season <span className="text-teal">Progress</span></h2>
            <div className="progress-container">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-labels">
                <span>Start</span>
                <span>Current Race</span>
                <span>Season Finale</span>
              </div>
            </div>
          </div>

          {/* DRIVERS */}
          <h2 className="section-title text-center">Current <span className="text-teal">Lineup</span></h2>
          <div className="drivers-grid">
            <div className="driver-card">
              <div className="driver-img-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Lewis_Hamilton_2018.jpg"
                  alt="Lewis Hamilton"
                />
              </div>
              <div className="driver-info">
                <h3>Lewis Hamilton</h3>
                <p className="text-grey">The G.O.A.T. | 7x Champion</p>
                <button className="btn-outline">View Telemetry</button>
              </div>
            </div>

            <div className="driver-card">
              <div className="driver-img-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6e/George_Russell_2020.jpg"
                  alt="George Russell"
                />
              </div>
              <div className="driver-info">
                <h3>George Russell</h3>
                <p className="text-grey">The Future | Precision Drive</p>
                <button className="btn-outline">View Telemetry</button>
              </div>
            </div>
          </div>

          {/* TEAM FOOTER */}
          <div className="dash-about">
            <h2 className="text-center">About the <span className="text-teal">Team</span></h2>
            <p className="text-center text-grey">
              Mercedes-AMG PETRONAS Formula One Team is one of the most dominant
              teams in Formula 1 history, known for engineering excellence and
              championship success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;