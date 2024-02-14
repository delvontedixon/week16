import { Col } from "react-bootstrap";

function UserProfile({ user }) {
  const { name, avatar, phone, id, teams } = user;

  return (
    <Col key={id} className="p-2 text-center border border-1 rounded-4 m-1">
      <img src={avatar} alt={name} className="img-fluid rounded-circle Image" />
      <h1 className="fs-4">{name}</h1>
      <p>{phone}</p>
      {teams &&
        teams.map((teams, index) => {
          return (
            <span key={index} className="badge bg-primary m-1">
              {teams}
            </span>
          );
        })}
    </Col>
  );
}

export default UserProfile;
