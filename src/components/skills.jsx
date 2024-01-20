import React, { forwardRef } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import Tooltip from "@mui/material/Tooltip";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
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
          flexWrap: "wrap", // Allow items to wrap to the next line on smaller screens
          padding: "0 10px", // Added padding for better spacing on smaller screens
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
