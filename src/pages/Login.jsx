import React, { useState } from "react";

export const Login = () => {
  const [dob, setDOB] = useState("");
  console.log("dob:", dob);
  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };
  const today = new Date();
  today.setFullYear(today.getFullYear() - 5);
  const minDate = today.toISOString().slice(0, 10);
  const handleSubmit = () =>{
    
  }
  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              id="floatingFirstName"
            />
            <label for="floatingFirstName">First Name</label>
          </div>
          <div class="col form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="floatingLastName"
            />
            <label for="floatingLastName">Last Name</label>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Dob</label>
          <input
            type="date"
            className="form-control mb-3" // Bootstrap class for styling
            value={dob}
            onChange={handleDOBChange}
            placeholder="Select your date of birth"
            onKeyDown={(e) => e.preventDefault()} // Prevent key events
            max={minDate}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Pin Code
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
