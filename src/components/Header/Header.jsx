import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

const Header = ({ introRef, aboutRef, skillsRef, contactRef }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("intro"); // Default to intro section

  const handleScroll = () => {
    setIsNavbarFixed(window.scrollY > 0);

    // Check which section is in view and update the activeSection state
    if (
      window.scrollY >= introRef.current.offsetTop &&
      window.scrollY < aboutRef.current.offsetTop
    ) {
      setActiveSection("intro");
    } else if (
      window.scrollY >= aboutRef.current.offsetTop &&
      window.scrollY < skillsRef.current.offsetTop
    ) {
      setActiveSection("about");
    } else if (
      window.scrollY >= skillsRef.current.offsetTop &&
      window.scrollY < contactRef.current.offsetTop
    ) {
      setActiveSection("skills");
    } else if (window.scrollY >= contactRef.current.offsetTop) {
      setActiveSection("contact");
    }
  };

  const isSmScreen = useMediaQuery("(max-width:960px)");

  const executeScroll = (ref, section) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isSmScreen ? (
        <TemporaryDrawer
          introRef={introRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          activeSection={activeSection}
        />
      
      ) : (
        <nav className=" backdrop-blur-sm text-white py-2.5 dark:bg-transparent fixed top-0 w-full z-10">
          <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto ">
            <span className="self-center font-bold  text-3xl  whitespace-nowrap dark:text-white text-[#EAA16E]">
              SEBRI
            </span>
            <ul className="flex flex-col mt-4 text-xl lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  onClick={() => executeScroll(introRef, "intro")}
                  className={`block py-2 pl-3 pr-4 text-white-700 border-b border-gray-100 ${
                    activeSection === "intro" ? "text-[#EAA16E]" : ""
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EAA16E] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current={activeSection === "intro" ? "page" : undefined}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => executeScroll(aboutRef, "about")}
                  className={`block py-2 pl-3 pr-4 text-white-700 border-b border-gray-100 ${
                    activeSection === "about" ? "text-[#EAA16E]" : ""
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EAA16E] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => executeScroll(skillsRef, "skills")}
                  className={`block py-2 pl-3 pr-4 text-white-700 border-b border-gray-100 ${
                    activeSection === "skills" ? "text-[#EAA16E]" : ""
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EAA16E] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => executeScroll(contactRef, "contact")}
                  className={`block py-2 pl-3 pr-4 text-white-700 border-b border-gray-100 ${
                    activeSection === "contact" ? "text-[#EAA16E]" : ""
                  } lg:hover:bg-transparent lg:border-0 lg:hover:text-[#EAA16E] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
