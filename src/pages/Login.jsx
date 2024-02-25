import React, { useState } from "react";
import { postData } from "../services/httpServices";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export const Login = () => {
  const { state } = useLocation();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleInputChange = (inptuField, e) => {
    setFormData({ ...formData, [inptuField]: e.target.value });
  };

  const today = new Date();
  today.setFullYear(today.getFullYear() - 5);
  const minDate = today.toISOString().slice(0, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, mobileNumber: state };
    setLoading(true);
    const res = await postData("create-user", data);
    console.log("data cookie:", res.data);
    console.log("status:", res.status);

    console.log('res.data.cookie:', btoa(res.data.cookie).replace("=","").split('salt'))
    if (res.status === 201) {
      setLoading(false);
      document.cookie = `_token=${res.data.cookie}`;
      Swal.fire({
        icon: "success",
        text: "User Created sucessfully",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/")
        }
      });
    }else {
      console.log('err aa gya')
    }
  };

  return (
    <div className="m-3">
      {loading ? (
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : null}
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
