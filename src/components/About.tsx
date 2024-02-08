import "../styles/About.scss";
import parallax from "../img/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";

const About = () => {
  return (
    <div id="About">
      <h1>
        <em>
          <strong>HI THERE,</strong>
        </em>
      </h1>
      <p>
        I'm LeDaniel, and <strong>people</strong> are my{" "}
        <strong>passion</strong>.
      </p>
      <img src={parallax} className="parallax" />
    </div>
  );
};

export default About;
