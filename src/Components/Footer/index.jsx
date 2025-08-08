// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white !px-13 md:px-20 pt-24 pb-12 ">
      {/* Top Section */}
      <div className="max-w-9xl">
        {/* Heading */}
        <h1 className="text-[52px] md:text-[100px] font-bold leading-none tracking-tight text-gray-300 ">
          aaaaaaaaaaaaaaaaaaaaaaa
        </h1>

        {/* Content Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 !mt-12" >
          {/* Logo & Name */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-white text-black font-bold text-xs flex items-center justify-center rounded-sm">
                N
              </div>
              <span className="text-white text-[20px]">Haven Craft</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[18px] text-white/50 font-[500] mb-3">Pages</h4>
            <ul className="text-[16px] space-y-1 !gap-2">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[18px] text-white/50 font-[500] mb-3">Social</h4>
            <ul className="text-[16px] space-y-1">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Google</li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="text-lg text-white/50 font-[600] mb-4 text-center">
              Contact Us
            </h4>
            <form className="space-y-4">
              {/* Name and Contact side-by-side */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-white bg-white/10 text-white text-center px-4 py-2 rounded-md placeholder-white/50 focus:outline-none w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="border border-white bg-white/10 text-white text-center px-4 py-2 rounded-md placeholder-white/50 focus:outline-none w-full"
                />
              </div>

              {/* Email input */}
              <input
                type="email"
                placeholder="Your Email"
                className=" border border-white bg-white/10 text-white text-center px-4 py-2 rounded-md placeholder-white/50 focus:outline-none w-full !mt-5"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-semibold w-[50%] !mt-5 flex items-center justify-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="!mt-25 pt-6 flex flex-col md:flex-row justify-between text-[15px] text-white/50">
          <p>© 2024 Haven Craft. All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-[15px]">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
