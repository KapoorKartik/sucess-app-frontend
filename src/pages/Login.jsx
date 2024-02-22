import React, { useState } from "react";
import { postData } from "../services/httpServices";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const { state } = useLocation();

  const [formData, setFormData] = useState({});

  const handleInputChange = (inptuField, e) => {
    setFormData({ ...formData, [inptuField]: e.target.value });
  };

  const today = new Date();
  today.setFullYear(today.getFullYear() - 5);
  const minDate = today.toISOString().slice(0, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, mobileNumber: state };
    const { status } = await postData("create-user", data);
    console.log("status:", status);
    if (status === 201) {
      Swal.fire({
        icon: "success",
        text: "User Created sucessfully",
      });
    }
  };

  return (
    <div className="m-3">
      <form>
        <div class="row">
          <div class="col">
            <label for="floatingFirstName">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              id="floatingFirstName"
              onChange={(e) => handleInputChange("firstName", e)}
            />
          </div>
          <div class="col">
            <label for="floatingLastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="floatingLastName"
              onChange={(e) => handleInputChange("lastName", e)}
            />
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
            onChange={(e) => handleInputChange("email", e)}
          />
        </div>
        <div class="mb-3">
          <label for="mobileNumber" class="form-label">
            Mobile Number
          </label>
          <input
            type="mobileNumber"
            class="form-control bg bg-secondary"
            id="mobileNumber"
            onChange={(e) => handleInputChange("mobileNumber", e)}
            value={state}
            readOnly
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Dob</label>
          <input
            type="date"
            className="form-control mb-3" // Bootstrap class for styling
            value={formData?.dob}
            onChange={(e) => handleInputChange("dob", e)}
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
            onChange={(e) => handleInputChange("pinCode", e)}
          />
        </div>
        <button onClick={(e) => handleSubmit(e)} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
