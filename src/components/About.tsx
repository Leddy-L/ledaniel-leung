import "../styles/About.scss";
import parallax from "../img/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Container id="About">
      <Image src={parallax} className="parallax" />
    </Container>
  );
};

export default About;
