import { Col } from "react-bootstrap";
import Badge from "./Badge.js";
function UserProfile({ user }) {
  const { name, avatar, phone, id, teams } = user;

  return (
    <Col key={id} className="p-2 text-center border border-1 rounded-4 m-1">
      <img src={avatar} alt={name} className="img-fluid rounded-circle Image" />
      <h1 className="fs-4">{name}</h1>
      <p>{phone}</p>
      <Badge teams={teams} />
    </Col>
  );
}

export default UserProfile;
