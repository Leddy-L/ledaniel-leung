import React from "react";
import "../styles/About.scss";
import parallax from "../img/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";

const About = () => {
  return (
    <header>
      <div className="container centered">
        <div className="row">
          <div className="landing-card col text">
            <h1>
              <em>
                <strong>HI THERE,</strong>
              </em>
            </h1>
            <p>
              I'm LeDaniel, and <strong>people</strong> are my{" "}
              <strong>passion</strong>.
            </p>
          </div>
          <div className="landing-card" id="landing-parallax">
            <img src={parallax} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
