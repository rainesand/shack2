import React from "react";
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const inputStyles = {
  width: 300,
};

const Register = () => {
  return (
    <div className="container">
    <div className="rainbow-m-vertical_x-large rainbow-m_auto">
      <div className="rainbow-align-content_center rainbow-flex_wrap">
      <Input
          label="Email"
          placeholder="Enter Email"
          type="text"
          className="rainbow-p-around_medium"
          style={inputStyles}
        />

        <Input
          label="Username"
          placeholder="Enter Username"
          type="text"
          className="rainbow-p-around_medium"
          style={inputStyles}
        />

        <Input
          label="Password"
          placeholder="**********"
          type="password"
          className="rainbow-p-around_medium"
          style={inputStyles}
        />


      </div>
    </div>
    </div>
  );
};

export default Register;
