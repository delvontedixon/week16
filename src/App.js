import "./App.css";
import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Title from "./components/Title.js";
import Navigationbar from "./components/Navbar.js";
import Form from "./components/UserForm.js";
import Routing from "./components/routing.js";

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

  //This is how I add users to page//
  const addNewUser = async (newUser) => {
    console.log(newUser);
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log(data);
    getUsers();
  };

  //addNewUser(newUser);

  return (
    <div>
      <Navigationbar />
      <Routing />
      <Title />
      <Row>
        {users.map((user, index) => {
          return <UserProfile key={index} user={user} />;
        })}
      </Row>
      <Form addNewUser={addNewUser} />
    </div>
  );
}
export default App;

//https://mockapi.io/projects/65b923cbb71048505a8a4707
