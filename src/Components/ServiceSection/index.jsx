// import React from 'react';

// const ServiceSection = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      
//       {/* LEFT SIDE TEXT */}
//       <div className="flex-1 mb-12 md:mb-0">
//         <p className="text-white/70 text-sm mb-3">Services</p>
//         <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
//           Renovation &<br />Remodeling
//         </h1>
//         <button className="text-white text-sm flex items-center gap-2 group">
//           View All
//           <span className="transform group-hover:translate-x-1 transition-transform duration-300">
//             →
//           </span>
//         </button>
//       </div>

//       {/* RIGHT SIDE IMAGE */}
//       <div className="flex-1 max-w-xl">
//         <img
//           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" // Replace with your image
//           alt="Interior"
//           className="rounded-xl shadow-lg object-cover w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;

import React from 'react';

const ServiceSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20">
      
      {/* LEFT SIDE TEXT */}
      <div className="flex-1 mb-12 md:mb-0">
        <p className="text-white/70 text-sm mb-3">Services</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
          Renovation &<br />Remodeling
        </h1>
        <button className="text-white text-sm flex items-center gap-2 group">
          View All
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="flex-1 max-w-xl space-y-6">
        {/* First Image */}
        <img
          src="src/assets/Images/Images/CLTO 3(1).JPG"
          alt="Interior 1"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />

        {/* Second Image */}
        <img
          src="src/assets/Images/Images/DYP 1.jpg"
          alt="Interior 2"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ServiceSection;

