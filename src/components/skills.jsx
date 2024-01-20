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
          paddingLeft: "40%",
          paddingBottom: "70px",
          paddingTop: "150px",
        }}
      >
        MY<span style={{ color: "#EAA16E" }}> SKILLS </span>
      </h1>
      <div
        style={{
          display: "flex",
          paddingLeft: "140px",
          paddingBottom: "500px",
        }}
      >
       <Tooltip title="C++" placement="right">
        <CgCPlusPlus className="tech-icons" />
        </Tooltip> 
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
