import "./App.css";
import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);

  const URL = "https://65b923cbb71048505a8a4706.mockapi.io/users/";

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  return (
    <div>
      <h1 className="text-center">Coaches</h1>
      <Row>
        {users.map((user) => {
          return <UserProfile user={user} />;
        })}
      </Row>
    </div>
  );
}
export default App;
