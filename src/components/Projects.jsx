import React, { forwardRef } from "react";
import image from "../assets/supersiesta.png";
const projects = [
  {
    title: "Supersiesta Home",
    description:
      "A complete website developed for Supersiesta Home using the MERN stack.",
    link: "http://supersiesta-home.tn",
    image: image, // Add your Supersiesta image URL here
  },
  // Add more projects as needed
];

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white text-center pb-20 pt-40">
          MY{" "}
          <span className="text-[#EAA16E]" ref={ref}>
            Projects
          </span>
        </h1>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                onClick={() => window.open(project.link, "_blank")}
                className="bg-[#1c1f28] cursor-pointer p-6 rounded-lg shadow-lg shadow-[#b07a57] transform transition-transform duration-300 hover:scale-105"
              >
                
              
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-3 rounded-lg-80 h-60 w-full"
                />
                <h3 className="text-xl text-[#eaa16e] font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EAA16E] hover:underline hover:text-white transition duration-"
                >
                  View Project
                </a>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
