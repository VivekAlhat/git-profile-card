import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Profile = (props) => {
  return (
    <Card
      border="primary"
      style={{ width: "20rem" }}
      className="text-center shadow"
    >
      <div className="text-center gravatar-img">
        <Image
          className="w-50 img-fluid gravatar"
          variant="top"
          src={props.gravatar}
          roundedCircle
        />
      </div>
      <Card.Body>
        <Card.Title>
          <h2>{props.username}</h2>
        </Card.Title>
        <Card.Text>{props.userbio}</Card.Text>
        <Row className="border-top mx-2 mb-2">
          <Col>
            <p className="font-weight-bold">Repositories</p>
            <p>{props.repos}</p>
          </Col>
          <Col>
            <p className="font-weight-bold">Followers</p>
            <p>{props.followers}</p>
          </Col>
        </Row>
        <a href={props.giturl} target="_blank" rel="noreferrer">
          <Button variant="info">Github</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Profile;
