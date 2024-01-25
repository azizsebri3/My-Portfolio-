import React, { forwardRef } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ paddingBottom: "370px" }}>
      <h1
        style={{
          fontSize: "2.9em",
          color: "white",
          textAlign: "center",
          paddingBottom: "70px",
          paddingTop: "150px",
        }}
      >
        MY<span style={{ color: "#EAA16E" }}> SKILLS </span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <CgCPlusPlus className="tech-icons" />
        <DiPython className="tech-icons" />
        <DiJavascript1 className="tech-icons" />
        <DiReact className="tech-icons" />
        <DiNodejs className="tech-icons" />
        <DiGit className="tech-icons" />
      </div>
    </div>
  );
});

export default Skills;
