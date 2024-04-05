import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>
        <h1>About us page </h1>
        <Outlet />
        <p>this is the paragraph </p>
      </div>
    </>
  );
};

export default About;
