import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  const containerStyles = {
    textAlign: "center",
  };

  const imageStyles = {
    width: "100%", // Make the image take up 100% of its container's width
    maxWidth: "700px", // Limit the image size to a maximum of 400 pixels
    height: "auto", // Maintain aspect ratio while resizing
    display: "inline-block", // Allow the image to appear inline
    float: "right", // Float the image to the right
    paddingRight: "10px", // Add some right margin for spacing
  };

  // Media query for screens with a width less than or equal to 765px
  const mediaQueryStyles = `
    @media (max-width: 765px) {
      .logoContainer {
        text-align: center;
      }

      .logoImage {
        float: none; // Reset the float property
        margin: 0 auto; // Center the image horizontally
        display: block; // Make sure the image is treated as a block element
        padding-right: 0; // Remove right padding
        padding-bottom : 200px
      }
    }
  `;

  return (
    <div style={containerStyles} className="logoContainer">
      <img src={logo} alt="Portfolio Photo" style={imageStyles} className="logoImage" />
      <style>{mediaQueryStyles}</style>
    </div>
  );
};

export default Logo;
