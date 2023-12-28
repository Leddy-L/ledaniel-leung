import "../styles/About.scss";
import parallax from "../img/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container id="About">
      <Row>
        <Col>
          <h1>
            <em>
              <strong>HI THERE,</strong>
            </em>
          </h1>
          <p>
            I'm LeDaniel, and <strong>people</strong> are my{" "}
            <strong>passion</strong>.
          </p>
        </Col>
        <Col>
          <img src={parallax} height="100%" width="320em" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
