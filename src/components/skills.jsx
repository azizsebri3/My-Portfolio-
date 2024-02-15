import React, { forwardRef, useState } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiVisualstudio,
  DiNpm,
  DiMongodb,
  DiGithub,
} from "react-icons/di";

const Tooltip = ({ content, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute z-10 px-3 py-2 text-xl text-[#CDCBD6] bg-transparent rounded-lg shadow-md tooltip dark:bg-gray-700">
          {content}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

const Skills = forwardRef((props, ref) => {
  return (
    <div>
      <h1 className="text-5xl text-white text-center pb-20 pt-40 " ref={ref}>
        MY <span className="text-[#EAA16E]">SKILLS</span>
      </h1>
      <div className="flex justify-center flex-wrap md:text-lg text-lg space-x-3  ">
        <Tooltip content="C++">
          <CgCPlusPlus className="tech-icons" />
        </Tooltip>
        <Tooltip content="Python">
          <DiPython className="tech-icons" />
        </Tooltip>
        <Tooltip content="JavaScript">
          <DiJavascript1 className="tech-icons" />
        </Tooltip>
        <Tooltip content="React">
          <DiReact className="tech-icons" />
        </Tooltip>
        <Tooltip content="Node.js">
          <DiNodejs className="tech-icons" />
        </Tooltip>
        <Tooltip content="MongoDB">
          <DiMongodb className="tech-icons" />
        </Tooltip>
      </div>
      <h1 className="text-5xl text-white text-center pb-20 pt-40 ">
        <span className="text-[#EAA16E]">Tools</span> I Use
      </h1>
      <div className="flex justify-center flex-wrap md:text-lg text-lg space-x-3 ">
        <Tooltip content="Visual Studio">
          <DiVisualstudio className="tech-icons" />
        </Tooltip>
        <Tooltip content="npm">
          <DiNpm className="tech-icons" />
        </Tooltip>
        <Tooltip content="Git">
          <DiGit className="tech-icons" />
        </Tooltip>
        <Tooltip content="GitHub">
          <DiGithub className="tech-icons" />
        </Tooltip>
      </div>
    </div>
  );
});

export default Skills;
