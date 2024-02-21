import React, { useState } from "react";
import { getData } from "../services/httpServices";
import { useNavigate } from "react-router-dom";

export const OtpAuth = () => {
  const [isSendOtp, setIsSendOtp] = useState(false);
  const generateOTP = async () => {
    const data = await getData(`generate-otp/${formData.mobileNumber}`);
    console.log("otp send sucessfull " + data.res);
    setIsSendOtp(true);
  };
  const [formData, setFormData] = useState({});
  console.log("formData:", formData);
  const handleInput = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };
  const naviage = useNavigate();
  const verifyOtp = async () => {
    const data = await getData(
      `/verify-otp/${formData.mobileNumber}/${formData.OTP}`
    );
    console.log("data:", data);
    if (data === "OTP has verifed") {
      naviage("/login");
    }
  };
  return (
    <div className="m-3">
      <form>
        <div class="input-group my-3">
          <span class="input-group-text" id="basic-addon1">
            +91
          </span>
          <input
            type="number"
            class="form-control"
            placeholder="Mobile Number"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            disabled={isSendOtp}
            onChange={(e) => handleInput(e.target.value, "mobileNumber")}
          />
        </div>
        {isSendOtp ? (
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              OTP
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                onChange={(e) => handleInput(e.target.value, "OTP")}
              />
            </div>
          </div>
        ) : null}
        <button type="button" class="btn btn-primary" onClick={verifyOtp}>
          Submit
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={generateOTP}
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};
