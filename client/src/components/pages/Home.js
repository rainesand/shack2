import React from "react";
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';

const inputStyles = {
  width: 300,
};

const Home = () => {
  return (

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

        <Button>
          Login
        </Button>

      </div>
    </div>
  );
};

export default Home;
