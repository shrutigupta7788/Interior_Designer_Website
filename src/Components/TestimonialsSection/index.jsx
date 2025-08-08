import React from "react";

const TestimonialsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center !mt-20"
      style={{
        backgroundImage: "url('src/assets/Images/Images/Accenture blr(1).jpg')",
      }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Heading */}
      <h1 className="text-black text-4xl md:text-6xl font-semibold text-center mb-10">
        Hear it from our clients
      </h1>

      {/* Testimonial Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg">
        <p className="text-sm font-semibold mb-2">Recommended</p>
        <p className="text-sm mb-4">
          Very happy with the app. Does what it says, simple payments and
          transactions. Quick account verification and withdrawals. 24/7 support
          available
        </p>

        {/* Users */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-black">
            VK
          </div>
          <p className="text-sm">Vamsi K.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-white">
            LA
          </div>
          <p className="text-sm">Leonie A.</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg">
        <p className="text-sm font-semibold mb-2">Recommended</p>
        <p className="text-sm mb-4">
          Very happy with the app. Does what it says, simple payments and
          transactions. Quick account verification and withdrawals. 24/7 support
          available
        </p>

        {/* Users */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-black">
            VK
          </div>
          <p className="text-sm">Vamsi K.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-white">
            LA
          </div>
          <p className="text-sm">Leonie A.</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg">
        <p className="text-sm font-semibold mb-2">Recommended</p>
        <p className="text-sm mb-4">
          Very happy with the app. Does what it says, simple payments and
          transactions. Quick account verification and withdrawals. 24/7 support
          available
        </p>

        {/* Users */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-black">
            VK
          </div>
          <p className="text-sm">Vamsi K.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm text-white">
            LA
          </div>
          <p className="text-sm">Leonie A.</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
