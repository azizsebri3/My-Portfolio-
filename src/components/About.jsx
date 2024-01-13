import React from "react";
import { forwardRef } from "react";
import isima from "../assets/logo-isima600.png";

const About = forwardRef((props, ref) => {
  const textStyle = {
    fontSize: "19px",
    fontFamily: "cursive",
    color: "white",
    paddingLeft: "170px",
  };
  const spanStyle = {
    color: "white",
    paddigBottom: "20px",
    paddingLeft: "120px",
    fontSize: "30px",
  };
  const imageStyle = {
    width: "30px",
    height: "30px",
  };
  return (
    <>
      <div style={{ paddingTop: "20%", width: "100%", height: "150%" }}>
        <h1
          ref={ref}
          style={{
            fontSize: "2.9em",
            color: "white",
            paddingLeft: "80px",
            paddingBottom: "60px",
          }}
        >
          LET ME <span style={{ color: "#EAA16E" }}> INTRODUCE </span> MYSELF
        </h1>

        <span style={spanStyle}>
          <b>🖥️ Academic Background: </b>
        </span>
        <p style={textStyle}>
          Exploring the complexities of algorithms and data structures at the{" "}
          <br></br>
          Higher Institute of Computer Science of Mahdia, I've mastered crucial{" "}
          <br></br>
          skills in C++ and Python, solidifying a robust foundation in <br></br>
          theoretical concepts and practical applications.
        </p>

        <br></br>
        <span style={spanStyle}>
          <b>💡 Innovation and Creativity: </b>
        </span>
        <p style={textStyle}>
          Driven by a passion for innovation, I believe in tackling challenges{" "}
          <br />
          with fresh perspectives. I developed a machine learning model to{" "}
          <br />
          predict customer churn, significantly improving retention rates at a{" "}
          <br />
          local startup.
        </p>
        <br />
        <span style={spanStyle}>🔧 Problem-Solving Skills:</span>
        <p style={textStyle}>
          With a knack for analytical thinking and a proven track record of
          success <br /> in problem-solving, I have consistently approached
          complex issues with a strategic mindset. <br /> This ability has not
          only contributed to my academic achievements but has also been honed{" "}
          <br />
          through active participation in events like  IEEEXtreme 17.0💻, where I
          secured the 34th place <br />
          among 986 Tunisian teams and and rank 1095 among the 7901 teams <br/>
          worldwide in IEEEXtreme.
        </p>
      </div>
    </>
  );
});

export default About;
