import React from "react";
import { Col, Row } from "react-bootstrap";
import { forwardRef } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

const Skills = forwardRef((props, ref) => {
  return (
    <>
      <h1
        ref={ref}
        style={{
          fontSize: "2.9em",
          color: "white",
          paddingLeft: "40%",
          paddingBottom: "70px",
          paddingTop: "150px",
        }}
      >
        MY<span style={{ color: "#EAA16E" }}> SKILLS </span>
      </h1>
      <div
        style={{ display: "flex", paddingLeft: "70px", paddingBottom: "500px" }}
      >
        <CgCPlusPlus className="tech-icons" />

        <DiPython className="tech-icons" />

        <DiJavascript1 className="tech-icons" />

        <DiReact className="tech-icons" />

        <DiNodejs className="tech-icons" />

        <DiGit className="tech-icons" />
      </div>
    </>
  );
});

export default Skills;
