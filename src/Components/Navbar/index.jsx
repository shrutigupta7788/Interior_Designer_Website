import React from "react";
// import bgVideo from './'

const Home = () => {
  return (
    <div className="z-100  overflow: hidden; background-color: rgba(0, 0, 0, 0); transform: translateZ(0px); border-radius: 1px  ;">
      {/* Header */}
      <header className="container px-6 py-4 flex justify-between items-center fixed top-0 z-10 bg-black bg-opacity-80">
        <div className="text-2xl font-bold !pl-18 ">N</div>
        <nav className="space-x-6 w-full flex items-center justify-center gap-8 !mt-5">
          <a href="project" className="hover:text-gray-300">
            Projects
          </a>
          <a href="services" className="hover:text-gray-300">
            Services
          </a>
          <a href="about" className="hover:text-gray-300">
            About
          </a>
          <a href="contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <div className="space-x-4 !pr-15 flex gap-3">
          <span className="cursor-pointer">📞</span>
          <span className="cursor-pointer">✉️</span>
        </div>
      </header>

      {/* Hero Section */}
   
    </div>
  );
};

export default Home;
