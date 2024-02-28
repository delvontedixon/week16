import "./App.css";
import { useState, useEffect } from "react";
import UserProfile from "./components/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import Title from "./components/Title.js";
import Navigationbar from "./components/Navbar.js";
import Form from "./components/UserForm.js";
import Background from "./components/Background.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
  //deleteUser
  const deleteUser = async (user) => {
    console.log(user);
    const response = await fetch(URL + user.id, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    setUsers(users.filter((u) => u.id !== user.id));
    getUsers();
  };
  //addNewUser(newUser);

  return (
    <div>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          {/* added a home element to match with your links in the navbar component */}
          {/* change "Home" to the component you want to appear on your home */}
          <Route path="/home" element={<UserProfile />}></Route>
          {/* if the route is to /home, it will show the Home page */}
          {/* <Route path="/userprofile" element={<UserProfile />}></Route> */}
          {/* if the route is to /userprofile it will show the main page*/}
          <Route path="/background" element={<Background />}></Route>
          {/* if the route is to /background it will show the background page */}
        </Routes>
      </BrowserRouter>
      <Title />
      <Row>
        {users.map((user, index) => {
          return (
            <UserProfile key={index} user={user} deleteUser={deleteUser} />
          );
        })}
      </Row>
      <Form addNewUser={addNewUser} />
    </div>
  );
}
export default App;

//https://mockapi.io/projects/65b923cbb71048505a8a4707
