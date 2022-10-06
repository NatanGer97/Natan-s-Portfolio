import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ProjectCardItem = (props) =>
{
    return (
      <Col>
        <Card
          className="shadow animate__animated animate__flipInY"
          style={{ width: "350px" }}
        >
          {/* <Card.Img variant="top" src={props.img}  /> */}
          <Card.Body>
            <a href={props.link}>
              <Card.Title>{props.title}</Card.Title>
            </a>
            <Card.Text className="text-center">{props.description}</Card.Text>
          </Card.Body>
          <Card.Text className="card-footer text-muted text-center">
            developed with: {props.skills}
          </Card.Text>
        </Card>
      </Col>
    );
};

export default ProjectCardItem;