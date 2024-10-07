import React, { forwardRef } from "react";

const projects = [
  {
    title: "Supersiesta Home",
    description: "A complete website developed for Supersiesta Home using the MERN stack.",
    link: "http://supersiesta-home.tn",
    image: "https://github.com/azizsebri3/My-Portfolio-/blob/main/src/assets/supersiesta.png", // Add your Supersiesta image URL here
  },
  // Add more projects as needed
];

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl text-white text-center pb-20 pt-40">
          MY <span className="text-[#EAA16E]" ref={ref}>Projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="mb-4 rounded-lg object-cover h-40 w-full"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline transition duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
