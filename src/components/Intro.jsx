import React, { forwardRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Logo from "./logo";

const Intro = forwardRef((props, ref) => {
  const [typeEffect] = useTypewriter({
    words: ["Aziz Sebri "],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 90,
  });

  const font1 = {
    fontWeight: "bold",
    color: "white",
    fontSize: "35px",
  };
  const font2 = {
    fontWeight: "bold",
    color: "#EAA16E",
    fontSize: "50px",
  };

  return (
    <div ref={ref}  style={{ marginTop: "-30%", marginLeft: "130px" }}>
     
      <h1  style={font1}>
        Hi There ! 👋🏻 <br />
        <span style={font2}>
          {" "}
          <span style={{ color: "white " }}>I am </span> {typeEffect}
        </span>
        <br />
      </h1>
      <p style={{ color: "white", fontSize: "20px" }}>
        I'm passionate about the MERN stack! 🚀<br />
        Currently diving deep into <br />
        MongoDB, Express.js, React.js <br />
        full-stack development. Let's create something amazing together! 🔧✨
      </p>
    </div>
  );
});

export default Intro;
