import React from "react";
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';
import { Link, useLocation } from "react-router-dom";
import "./style.css";


const inputStyles = {
  width: 300,
};

const Home = () => {
  return (
    <div className="container">

    <div className="rainbow-m-vertical_x-large rainbow-m_auto">
      <div className="rainbow-align-content_center rainbow-flex_wrap">
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

        <Button variant="brand" className="rainbow-m-around_medium">
          Login
        </Button>
        
        <Link to="/register" className="notHere" >
        <Button variant="brand" className="rainbow-m-around_medium">
          Register
        </Button>
        </Link>

      </div>
    </div>
    </div>
  );
};

export default Home;
