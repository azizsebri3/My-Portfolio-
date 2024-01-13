import React from "react";
import logo from "../assets/logo.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  const imageStyles = {};

  return (
    <>
      <div>
        <img
          src={logo}
          alt="Portfolio Photo"
          style={{ paddingLeft: "55%", width: "42%" , paddingTop : "50px"}}
        />
      </div>
    </>
  );
};

export default Logo;
