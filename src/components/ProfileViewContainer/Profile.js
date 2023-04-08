import React from "react";
import Typical from "react-typical";
export default function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <h5 className="text">WELCOME TO MY WORLD</h5>
            <span className="primary-text">
              Hello I'm <span className="highlighted-text">{props.name}</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🔴",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "Mern Stack Developer 😎",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn">Hire Me</button>
            <a
              href="Laksh's Resume.pdf"
              download="EDUBRIDGE Laksh's Resume.pdf"
            >
              <button className="highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
