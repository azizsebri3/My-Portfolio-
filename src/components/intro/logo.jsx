import React from "react";
import logo from "../../assets/logo.png";
import { useMediaQuery } from "@mui/material";

// ...(isSm ? {width: 170%} : width: "100%" )
const Logo = () => {
  const containerStyles = {
    textAlign: "center",
  };
  
const isSm = useMediaQuery("(max-width:765px)");

  const imageStyles = {
    ...(isSm ? { width: "119%" } : { width: "100%" }),
    maxWidth: "580px", // Limit the image size to a maximum of 400 pixels
    height: "auto", // Maintain aspect ratio while resizing
    display: "inline-block", // Allow the image to appear inline
    float: "right", // Float the image to the right
    paddingRight: "10px",
    ...(isSm ? {paadingLeft: '140px'} : {paddingLeft: "60px"}  )
    
  }

  

  return (
    <div style={containerStyles} className="logoContainer">
      <img src={logo} alt="Portfolio Photo" style={imageStyles} className="logoImage" />
    </div>
  );
};

export default Logo;
