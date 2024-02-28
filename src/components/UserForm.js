import React, { useState } from "react";

function Form({ addNewUser }) {
  const [coachName, setCoachName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("handle", coachName);
    let newUser = {
      name: coachName,
      avatar: "",
      phone: "555-555-5555",
      teams: ["Bruner", "Letcher"],
    };
    addNewUser(newUser);
  };
  return (
    <div className="row">
      <div className="col">
        <form>
          <div className="form-group">
            <label htmlFor="coachName">Coach Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputCoachName"
              aria-describedby="CoachName"
              placeholder="Enter Coach Name"
              onChange={(event) => setCoachName(event.target.value)}
            />
          </div>
          <button
            onClick={(event) => handleSubmit(event)}
            type="text"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
