import React from "react";
// import bgVideo from './'

const Home = () => {
  return (
    <div className="width: 100%; height: 100%; overflow: hidden; background-color: rgba(0, 0, 0, 0); transform: translateZ(0px); border-radius: 1px; position: relative;">
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
      <main className="mt-20 px-6 relative">
        <h1 className="text-6xl md:text-8xl font-bold text-center leading-tight !mb-10 !mt-25 ">
          Reimagine
          <br />
          Your Space
        </h1>
        <div className="relative w-full max-w-screen-xl mx-auto ">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/4 -translate-y-1/3 !mt-8 ">
            <img
              src="https://framerusercontent.com/images/kEM2A8aPUx6Imk6456geaTOdOQ4.jpg"
              alt="Interior Design"
              className="w-70 h-auto shadow-lg rounded-lg "
            />
          </div>

          <div className="flex flex-col items-start absolute left-0 !ml-20">
            <div className="relative flex flex-row items-center space-x-6 overflow-visible">
              <img
                src="https://framerusercontent.com/images/btisBSSVxm2s9Hx3kasMJWIpac.png?scale-down-to=512"
                alt="Stats 1"
                className="w-16 h-16 object-contain rounded-full shadow-lg"
              />
              <img
                src="https://framerusercontent.com/images/j5tnzv5OaEj9FujwPTUULxatce0.png?scale-down-to=1024"
                alt="Stats 2"
                className="w-16 h-16 object-contain rounded-full shadow-lg absolute left-6 z-10"
              />
              <img
                src="https://framerusercontent.com/images/jnkw4ibluIF3AZThcl8fLrWhNw.png?scale-down-to=1024"
                alt="Stats 3"
                className="w-16 h-16 object-contain rounded-full shadow-lg absolute left-12 z-10"
              />
            </div>
            <p className="text-md !mt-3 !ml-2 relative !pr-1">
              More than 1000+ homes
              <br />
              have been shaped by
              <br />
              Haven Craft
            </p>
          </div>

          <div className=" flex items-end flex-col justify-between  text-left !mt-35 relative">
            <p className="block text-md ">
              The intellect crafts the stunning,
              <br /> the soul shapes the residence,
              <br /> The Sweet Home
            </p>
            <button className=" !mt-6 bg-white text-black !px-13 !py-4 rounded-full hover:bg-gray-200 !mr-12 ">
              Get started
            </button>
          </div>


          <section>
         <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="particles"></div>
        </div>

          </section>
          

        </div>
      </main>
    </div>
  );
};

export default Home;
