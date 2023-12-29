import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <Container id="Experience">
      {workExperience.map((item) => (
        <Card key={item}>
          <Card.Body>
            <Card.Title>{item}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Experience;
