import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Experience = () => {
  const workExperience = ["Qualcomm", "Northrop Grumman"];

  return (
    <Container id="Experience">
      <CardGroup>
        {workExperience.map((exp_item) => (
          <Card>
            <Card.Title>{exp_item}</Card.Title>
            <Card.Text>Some text</Card.Text>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default Experience;
