import UserProfile from "./components/UserProfile";
import Background from "./Background";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* if the route is to /home, it will show the Home page */}
          <Route path="/userprofile" element={<UserProfile />} />
          {/* if the route is to /userprofile it will show the main page*/}
          <Route path="/background" element={<Background />} />
          {/* if the route is to /background it will show the background page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
