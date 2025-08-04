import React from 'react';

const FinanceBanner = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4">
      {/* Background Grid of Cards */}
      <div className="absolute top-10 left-10 w-80 h-70 rounded-xl overflow-hidden">
        <img
          src="src/assets/Images/Images/0b53052d-8b37-4ce6-9119-661b6f528830.JPG"
          alt="person-1"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="absolute top-20 right-10 bg-blue-100 rounded-xl p-4 w-60 shadow-md">
        <div className="text-sm font-medium mb-1">EUR</div>
        <div className="text-2xl font-bold text-gray-800">€100</div>
        <p className="text-sm text-gray-500 mb-2">Balance: €4,921.22</p>
        <button className="w-full bg-white border border-blue-500 text-blue-600 rounded-full py-1">
          Send
        </button>
      </div>

      <div className="absolute bottom-16 left-10 bg-green-500 text-white p-4 rounded-xl w-64 shadow-lg">
        <p className="text-sm">Exchange</p>
        <p className="text-lg font-bold">– €500.00</p>
        <p className="text-lg font-bold">+ zł2,179.92</p>
        <button className="mt-2 text-xs bg-white text-green-600 px-3 py-1 rounded-full">
          Approved
        </button>
      </div>

      <div className="absolute bottom-20 right-10 w-80 h-70 rounded-xl overflow-hidden">
        <img
          src="src/assets/Images/Images/4f13162b-b2c2-4645-9380-61ef848342ad(1).JPG"
          alt="person-2"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-1 left-1 bg-white px-2 py-1 rounded-full text-xs font-medium shadow">
          Enjoy the coffee!
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-pink-100 p-4 rounded-xl w-48 text-center shadow-md">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Jane"
          className="w-10 h-10 rounded-full mx-auto mb-2"
        />
        <p className="font-medium text-sm">Jane Thomas</p>
        <p className="text-xs text-gray-500">🔒 Secure payment</p>
        <button className="mt-2 w-full bg-white border text-pink-600 rounded-full py-1 text-sm">
          Send
        </button>
      </div>

      {/* Center Text */}
      <h1 className="text-5xl md:text-7xl text-red-600 font-bold text-center z-10">
        Expert Interior<br />  Design Solutions
      </h1>
    </div>
  );
};

export default FinanceBanner;
